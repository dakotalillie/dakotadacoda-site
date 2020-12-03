<script>
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
</script>

<section id="experience" class="bg-gray-700">
  <div class="container mx-auto py-12 px-8 space-y-8 md:py-16">
    <h2 class="text-3xl text-center md:text-left">Experience</h2>
    {#each experience as { category, items }}
      <h3 class="text-2xl">{category}</h3>
      <div
        class="text-gray-400 xsm:flex xsm:flex-row xsm:overflow-x-scroll xsm:overflow-y-hidden xsm:space-x-8 sm:space-x-0 sm:grid sm:gap-y-8 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12">
        {#each items as item}
          <ExperienceTile {...item} />
        {/each}
      </div>
    {/each}
  </div>
</section>
