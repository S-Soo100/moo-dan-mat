import path from "path";

export type Post = {
  // 단백질 파우더
  image: string;
  name: string;
  brand: string;
  taste: string;
  nation: string;
  capacity: number;
  capacity_unit: string;
  price: string;
  one_time_capacity: number;
  one_time_ingredient: number;
  recommended_target: string;
  seller: string;
  seller_link: string;
  // 게시글
  id: string;
  photo: string;
  title: string;
  context: string;
  hashtag: string;
  published_at: string;
  writer: string;
  category: string;
  comment: string;
  good: number;
};

export async function getPosts(): Promise<Post[]> {
  return postData;
}

// 더미 데이터
const postData: Post[] = [
  {
    // 단백질 파우더
    image: "url_to_image",
    name: "Protein Powder",
    brand: "XYZ",
    taste: "Chocolate",
    nation: "USA",
    capacity: 500,
    capacity_unit: "g",
    price: "$29.99",
    one_time_capacity: 30,
    one_time_ingredient: 25,
    recommended_target: "Athletes",
    seller: "ABC Nutrition",
    seller_link: "https://example.com",
    // 게시글
    id: "1",
    photo: "url_to_photo",
    title: "Benefits of Protein Powder",
    context: "Protein powder is a convenient way to increase protein intake...",
    hashtag: "#protein #nutrition",
    published_at: "2024-03-25",
    writer: "John Doe",
    category: "Health",
    comment: "Great article!",
    good: 15,
  },
  {
    // 단백질 파우더
    image: "url_to_image",
    name: "Whey Protein",
    brand: "ABC",
    taste: "Vanilla",
    nation: "Canada",
    capacity: 750,
    capacity_unit: "g",
    price: "$39.99",
    one_time_capacity: 25,
    one_time_ingredient: 20,
    recommended_target: "Bodybuilders",
    seller: "XYZ Supplements",
    seller_link: "https://example.com",
    // 게시글
    id: "2",
    photo: "url_to_photo",
    title: "How to Choose the Right Protein Powder",
    context:
      "Choosing the right protein powder depends on your fitness goals...",
    hashtag: "#fitness #musclebuilding",
    published_at: "2024-03-24",
    writer: "Jane Smith",
    category: "Fitness",
    comment: "Very informative!",
    good: 20,
  },
];
