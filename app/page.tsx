import Hero from "@/components/Hero";
import Testimonial from "@/components/testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: "Tinashe Jukeni",
          role: "CFB Manger",
          image: "/images/avatar.png",
        }}
      >
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          sapiente dolorum assumenda, eos accusamus voluptatem, reprehenderit
          ipsa voluptas unde, odio cumque id! Reiciendis itaque excepturi
          dolores!”
        </p>
      </Testimonial>
    </>
  );
};

export default HomePage;
