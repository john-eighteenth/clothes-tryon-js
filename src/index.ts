import axios, { ResponseType } from "axios";
import fs from "fs";
import { RAPID_API_KEY } from "./config";

const virtualTryOn = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("clothing_image_url", "https://raw.githubusercontent.com/john-eighteenth/clothes-tryon-js/main/resources/look.jpg");
  encodedParams.set("avatar_image_url", "https://raw.githubusercontent.com/john-eighteenth/clothes-tryon-js/786d5d3c6a4ac0a9eb7f0d6b658c9e162e82ae50/resources/avatar.jpg");

  const options = {
    method: "POST",
    url: "https://texel-virtual-try-on.p.rapidapi.com/try-on-url",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "texel-virtual-try-on.p.rapidapi.com",
    },
    data: encodedParams,
    responseType: 'arraybuffer' as ResponseType,
  };
  
  try {
    const response = await axios.request(options);
    fs.writeFileSync("result.jpg", Buffer.from(response.data), {encoding: "binary"})
//    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

virtualTryOn();
