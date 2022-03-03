import { getUUID } from "../utils/utils.js";
import testItemFirst from "../../assets/catalog/watch.jpeg";
import testItemSecond from "../../assets/catalog/women's pants.png";
import testItemThird from "../../assets/catalog/coat.png";
import testItemFourth from "../../assets/catalog/jacket.png";
import testItemFifth from "../../assets/catalog/nike.png";
import firstImageSlide from "../../assets/slider-image/sOliver-sale.jpg";
import secondImageSlide from "../../assets/slider-image/big-final-sale.jpg";
import thirdImageSlide from "../../assets/slider-image/men-holiday-gifts-.jpg";
import foursImageSlide from "../../assets/slider-image/new-collections.jpg";
const CATALOG = [
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },

  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "APRIL WINGS / Брюки женские",
    price: 38,
    id: getUUID(),
    src: testItemSecond,
  },
  {
    text: "SAVAGE / Пуховик зимний женский",
    price: 95,
    id: getUUID(),
    src: testItemThird,
  },
  {
    text: "SAVAGE / Куртка зимняя женская",
    price: 99,
    id: getUUID(),
    src: testItemFourth,
  },
  {
    text: "Nike / Кроссовки M NIKE VAPOR LITE HC",
    price: 54,
    id: getUUID(),
    src: testItemFifth,
  },
  {
    text: "Honor / Умный браслет Band",
    price: 25,
    id: getUUID(),
    src: testItemFirst,
  },
];

const SLIDER_IMAGES = [
  firstImageSlide,
  secondImageSlide,
  thirdImageSlide,
  foursImageSlide,
];
export { CATALOG, SLIDER_IMAGES };
