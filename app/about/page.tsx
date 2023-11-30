import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { HiOutlineCheck } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    name: "Mission",
    description: `APC is primarily in the business of providing quality and excellent
    infrastructural development and material procurement services, with
    an unparalleled ability to complete mandated projects on time, to cost
    and at unmatched quality.`,
    href: "#",
    icon: HiOutlineCheck,
  },
  {
    name: "Vision",
    description: `To be a service provider of choice in the modernisation and
    empowerment of communities through increased infrastructure
    development and materials procurement for all sectors of the
    economy in SADC and beyond.`,
    href: "#",
    icon: HiOutlineCheck,
  },
  {
    name: "Values",
    description: `In all our dealings, APC subscribes to the value of Ubuntu, which is the
      bedrock for all other values.`,
    href: "#",
    icon: HiOutlineCheck,
  },
];

const features = [
  {
    name: "Supplier Partnerships",
    description:
      "When we find suppliers who match our high criteria for quality products, we arrange close partnerships. All our suppliers are long term relations.",
  },
  {
    name: "Logistics",
    description:
      "At Abana we work with the best transporting agents to make sure our products all arrive safely and on time.",
  },
  {
    name: "Customer Partnerships",
    description:
      "We strive to build long term relations with our customers, built on trust and of course our ability to deliver quality poducts, on time every time at attractive prices.",
  },
  {
    name: "Product request",
    description:
      "Choices depend on people and we cannot always know what the client wants. Through our large supplier networks, we are able to locate the best products upon request. Just Ask!",
  },
  {
    name: "Selection",
    description:
      "We are constantly scouting for new high quality yet affordable products to include in our portfolio to offer the very best solution to our clients.",
  },
];

const AboutPage = () => {
  return (
    <section className="container py-4 sm:py-6">
      <div className="flex max-w-[980px] flex-col pb-6 items-start mt-3 gap-2">
        <h1 className="text-3xl font-bold font-cabinet leading-tight tracking-tighter md:text-4xl">
          About Abana Projects &amp; Consultancy
        </h1>
        <p className="max-w-[700px] text-lg text-foreground/80">
          Registered and operating in Zimbabwe,Abana Projects & Consultancy
          (Pvt) Ltd (APC)is an experienced and skilled full-service Real Estate,
          Project Contracting & Management, Material Procurement, and
          Infrastucture Development Consultancy & Advisory firm positioned to
          serve the Zimbabwean property, large-scale commodity and consumer
          makerts.
        </p>
      </div>
      <hr className="dark:border-accent" />
      <div id="values" className="py-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-cabinet font-bold tracking-tight text-foreground sm:text-4xl">
            Our Profile
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  {/* <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <value.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div> */}
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-zinc-600 dark:text-foreground/80">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <hr className="dark:border-accent" />
      <div className="bg-background py-10 sm:py-16">
        <div className="max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-orange-600">
                Everything you need
              </h2>
              <p className="mt-2 text-2xl font-cabinet font-bold tracking-tight text-foreground sm:text-3xl">
                Our Competencies
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-zinc-600 dark:text-foreground/80 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-foreground">
                    <HiOutlineCheck
                      className="absolute left-0 top-1 h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <hr className="dark:border-accent" />
      <div className="bg-background py-10 sm:py-16">
        <div className=" max-w-7xl ">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-lg font-semibold leading-8 text-foreground">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/clients/neo-power.png"
                alt="Transistor"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/clients/liquid.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/clients/old-mutual.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/clients/cfoods.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src="/clients/lc-industries.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
