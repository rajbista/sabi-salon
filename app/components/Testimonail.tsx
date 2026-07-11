import TestimonialItem from "../components/TestimonialItem";

const Testimonail = () => {
  const data = [
    {
      author: "MARIA",
      content:
        "I had my eyebrow threading done at SABI SALON and loved the results. My brows looked clean and beautifully shaped. The staff was friendly and professional. I will definitely be back!",
    },
    {
      author: "SOFIA",
      content:
        "I came in for a facial and had a wonderful experience. My skin felt fresh, smooth, and glowing afterward. The salon was very clean and relaxing. Highly recommend!",
    },
    {
      author: "NEHA",
      content:
        "I got a haircut and highlights at SABI SALON and absolutely loved the results. They listened to what I wanted and made my hair look beautiful. I will definitely come back!",
    },
    {
      author: "ISABELLA",
      content:
        "I had my eyelashes done at SABI SALON and they turned out beautiful and natural-looking. The service was professional, relaxing, and comfortable. Great experience!",
    },
    {
      author: "VALENTINA",
      content:
        "I came in for waxing and had a great experience. The salon was clean, the staff was friendly, and the service was quick and professional. I highly recommend SABI SALON!",
    },
    {
      author: "GABRIELA",
      content:
        "Amazing experience! I had my eyebrows threaded and tinted, and they came out exactly how I wanted. Friendly staff, beautiful salon, and great service. I will definitely be returning!",
    },

    // {
    //   author: "Zareen Skoien",
    //   content:
    //     "Thank you ladies for fixing my eyebrows. I am in love and can't wait to come back. Also, my Momma wants to come for a visit.",
    // },
    // {
    //   author: "Allena Chanel",
    //   content:
    //     "My firen and I stopped in last minute. She got eye brow threading and I got a henna tattoo. We are both pleased and will both be back!",
    // },
    // {
    //   author: 'Amber Kordik',
    //   content: "I LOVE & MISS BINU AND SABI SO MUCH!!! They sat there and took their time with my eyebrows, when they were done Sabi would stand over my eyebrows and basically study them to make sure they were even and make sure your eyebrows were SISTERS and not long lost cousins 😂 BINU also did the same thing, taking her time making sure everything was even & wasn’t uncommon if someone was having an issue for BINU to step over & help them. She made sure every customer left SATISFIED and happy with the results. I’d give ANYTHING to have them come down to Tennessee."
    // },
  ];
  return (
    <section className="container block">
      <header className="block__header" data-aos="fade-up">
        <h1>TESTIMONIAL</h1>
      </header>
      {data.map((item, index) => (
        <TestimonialItem
          key={index}
          author={item.author}
          content={item.content}
        />
      ))}
    </section>
  );
};

export default Testimonail;
