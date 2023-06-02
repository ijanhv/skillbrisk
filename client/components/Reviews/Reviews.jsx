import React from "react";
import Review from "./Review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "@/utils/newRequest";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationKey: ["addReview"],
    mutationFn: (review) => {
      return newRequest.post('/reviews', review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="w-full flex items-start justify-start flex-col gap-4">
      {isLoading
        ? "Loading..."
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}

      <div className="w-1/2">
        <h2 className="text-xl font-semibold text-gray-500">
          Add a new review
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="">
              <textarea
                name="review"
                className="border w-full border-gray-300 rounded-md p-2 outline-none focus:border-gray-400 transition-all duration-300"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="star"
                className="text-md font-medium text-gray-500"
              >
                Rating
              </label>
              <select
                type="number"
                name="star"
                className="border border-gray-300 rounded-md p-2 my-3 outline-none focus:border-gray-400 transition-all duration-300"
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Star</option>
                <option value={3}>3 Star</option>
                <option value={4}>4 Star</option>
                <option value={5}>5 Star</option>
              </select>
            </div>
            <button className="bg-primary text-white font-semibold text-sm py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
