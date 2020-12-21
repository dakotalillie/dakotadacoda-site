<script>
  import { onMount } from "svelte";
  import Splide from "@splidejs/splide";
  import ExperienceTile from "./ExperienceTile.svelte";

  const experience = [
    {
      category: "Languages",
      items: [
        { image: "javascript.png", name: "JavaScript" },
        { image: "typescript.png", name: "TypeScript" },
        { image: "python.png", name: "Python" },
        { image: "php.png", name: "PHP" },
        { image: "golang.jpg", name: "Golang" },
        { image: "ruby.png", name: "Ruby" },
        { image: "c++.png", name: "C++" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { image: "react.png", name: "React" },
        { image: "gatsby.png", name: "Gatsby" },
        { image: "nextjs.jpg", name: "NextJS" },
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
        { image: "jest.png", name: "Jest" },
        { image: "testing-library.png", name: "Testing Library" },
        { image: "pytest.png", name: "PyTest" },
        { image: "sass.png", name: "Sass" },
        { image: "tailwind.jpg", name: "Tailwind" },
        { image: "styled-components.png", name: "Styled Components" },
        { image: "emotion.png", name: "Emotion" },
        { image: "redux.png", name: "Redux" },
        { image: "graphql.png", name: "GraphQL" },
        { image: "swagger.png", name: "Swagger" },
        { image: "docker.png", name: "Docker" },
        { image: "kubernetes.png", name: "Kubernetes" },
        { image: "terraform.png", name: "Terraform" },
        { image: "jenkins.png", name: "Jenkins" },
      ],
    },
    {
      category: "Certifications",
      items: [
        { image: "aws-cloud-practitioner.png", name: "AWS Certified Cloud Practitioner" },
        { image: "ckad.png", name: "Certified Kubernetes Application Developer" },
      ],
    },
  ];

  onMount(() => {
    const commonOptions = {
      arrows: false,
      perPage: 4,
      keyboard: "focused",
      lazyLoad: "sequential",
      breakpoints: {
        500: {
          perPage: 3,
        },
      },
    };

    new Splide("#languages-carousel", commonOptions).mount();
    new Splide("#frameworks-carousel", commonOptions).mount();
    new Splide("#other-tools-carousel", commonOptions).mount();
    new Splide("#certifications-carousel", { ...commonOptions, pagination: false, drag: false }).mount();
  });
</script>

<style>
  #experience {
    padding-top: 4rem;
    margin-top: -4rem;
  }

  .splide :global(.splide__pagination) {
    @apply bottom-0 left-0 relative mt-2 transform-none;
    width: 93%;
  }

  .splide :global(.splide__pagination__page) {
    height: 10px;
    margin: 6px;
    width: 10px;
  }
</style>

<div id="experience" />
<section class="bg-gray-700">
  <div class="container mx-auto py-12 px-8 space-y-8 md:py-16">
    <h2 class="text-3xl text-center md:text-left">Experience</h2>
    {#each experience as { category, items }}
      <h3 class="text-2xl">{category}</h3>
      <div
        class="text-gray-300 hidden sm:grid sm:space-x-0 sm:gap-y-8 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12">
        {#each items as item}
          <ExperienceTile {...item} />
        {/each}
      </div>
      <div id={`${category.split(' ').join('-').toLowerCase()}-carousel`} class="splide sm:hidden">
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
