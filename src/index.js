import axios from "axios";

const encodedParams = new URLSearchParams();
encodedParams.set("clothing_image_url", "<REQUIRED>");
encodedParams.set("avatar_image_url", "<REQUIRED>");

const options = {
  method: "POST",
  url: "https://texel-virtual-try-on.p.rapidapi.com/try-on-url",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "2f11f6539cmshffc5f3b30b600b1p1fa1c4jsneb6cb291bb26",
    "X-RapidAPI-Host": "texel-virtual-try-on.p.rapidapi.com",
  },
  data: encodedParams,
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
