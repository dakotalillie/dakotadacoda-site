<script>
  import { onMount } from "svelte";
  import ExperienceTile from "./ExperienceTile.svelte";

  const experience = [
    {
      category: "Certifications",
      items: [
        {
          image: "aws-solutions-architect-associate.png",
          name: "AWS Solutions Architect Associate",
          link: "https://www.credly.com/badges/1f89449b-0018-4207-b1ff-7cd9ae94d196/public_url",
        },
        {
          image: "aws-developer-associate.png",
          name: "AWS Certified Developer Associate",
          link: "https://www.youracclaim.com/badges/89317c55-c23f-4822-bce9-78b3479d5ffd/public_url",
        },
        {
          image: "aws-cloud-practitioner.png",
          name: "AWS Certified Cloud Practitioner",
          link: "https://www.youracclaim.com/badges/f449ea60-c666-4301-91ef-a20dc67da115/public_url",
        },
        {
          image: "ckad.png",
          name: "Certified Kubernetes Application Developer",
          link: "https://www.youracclaim.com/badges/5aad5dbf-9f98-4911-972b-2835d065ebb4/public_url",
        },
      ],
    },
    {
      category: "Languages",
      items: [
        { image: "javascript.png", name: "JavaScript" },
        { image: "typescript.png", name: "TypeScript" },
        { image: "golang.jpg", name: "Golang" },
        { image: "python.png", name: "Python" },
        { image: "php.png", name: "PHP" },
        { image: "ruby.png", name: "Ruby" },
        { image: "c-plus-plus.png", name: "C++" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { image: "react.png", name: "React" },
        { image: "nextjs.jpg", name: "NextJS" },
        { image: "gatsby.png", name: "Gatsby" },
        { image: "svelte.png", name: "Svelte" },
        { image: "express.png", name: "Express" },
        { image: "flask.png", name: "Flask" },
        { image: "django.png", name: "Django" },
        { image: "wordpress.png", name: "WordPress" },
        { image: "rails.png", name: "Ruby on Rails" },
      ],
    },
    {
      category: "Other Tools",
      items: [
        { image: "docker.png", name: "Docker" },
        { image: "kubernetes.png", name: "Kubernetes" },
        { image: "terraform.png", name: "Terraform" },
        { image: "jenkins.png", name: "Jenkins" },
        { image: "argo.png", name: "Argo" },
        { image: "opa.png", name: "OPA" },
        { image: "graphql.png", name: "GraphQL" },
        { image: "jest.png", name: "Jest" },
        { image: "testing-library.png", name: "Testing Library" },
        { image: "pytest.png", name: "PyTest" },
        { image: "sass.png", name: "Sass" },
        { image: "tailwind.jpg", name: "Tailwind" },
        { image: "styled-components.png", name: "Styled Components" },
        { image: "emotion.png", name: "Emotion" },
        { image: "redux.png", name: "Redux" },
        { image: "swagger.png", name: "Swagger" },
      ],
    },
  ];

  let isMobile = false;

  $: if (isMobile) {
    import("@splidejs/splide").then(({ default: Splide }) => {
      const commonOptions = {
        arrows: false,
        breakpoints: { 500: { perPage: 3 } },
        flickMaxPages: 1,
        flickPower: 200,
        keyboard: "focused",
        lazyLoad: "sequential",
        perPage: 4,
      };

      new Splide("#languages-carousel", commonOptions).mount();
      new Splide("#frameworks-carousel", commonOptions).mount();
      new Splide("#other-tools-carousel", commonOptions).mount();
      new Splide("#certifications-carousel", commonOptions).mount();
    });
  }

  onMount(() => {
    function checkIfMobile() {
      if (!isMobile && window.matchMedia("(max-width: 639px)").matches) {
        isMobile = true;
        removeEventListener("resize", checkIfMobile);
      }
    }

    checkIfMobile();
    if (!isMobile) {
      addEventListener("resize", checkIfMobile);
      return () => removeEventListener("resize", checkIfMobile);
    }
  });
</script>

<div id="experience" />
<section class="bg-gray-700">
  <div class="container mx-auto py-12 px-8 space-y-8 md:py-16">
    {#each experience as { category, items }}
      <h2 class="text-2xl">{category}</h2>
      <div
        class="text-gray-300 hidden sm:grid sm:space-x-0 sm:gap-y-8 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12"
      >
        {#each items as item}
          <ExperienceTile {...item} />
        {/each}
      </div>
      <div id={`${category.split(" ").join("-").toLowerCase()}-carousel`} class="splide sm:hidden">
        <div class="splide__track">
          <div class="splide__list">
            {#each items as item}
              <ExperienceTile className="splide__slide" {...item} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  #experience {
    padding-top: 4rem;
    margin-top: -4rem;
  }

  .splide :global(.splide__pagination) {
    @apply bottom-0 left-0 relative mt-3 transform-none;
    width: 93%;
  }

  .splide :global(.splide__pagination__page) {
    height: 10px;
    margin: 6px;
    width: 10px;
  }
</style>
