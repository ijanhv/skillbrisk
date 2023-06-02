import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "@/utils/newRequest";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import Layout from "@/components/Layout/Layout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Pay = () => {
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  const router = useRouter();
  const payid = router.query.id;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${payid}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Layout>
        <main className="py-40">
        <div className="contain">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
      </main>
    </Layout>
  );
};

export default Pay;
