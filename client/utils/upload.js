import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "skillbrisk");

  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/skillbrisk/image/upload', data, {
  headers: {
    Authorization: `Bearer 297828228636872`,
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'Authorization',
  },
});
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
