<script>
  import SkillTile from "./SkillTile.svelte";

  const skillCategories = [
    {
      category: "Languages",
      skills: [
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
      skills: [
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
      skills: [
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
      skills: [
        { image: "aws-cloud-practitioner.png", name: "AWS Certified Cloud Practitioner" },
        { image: "ckad.png", name: "Certified Kubernetes Application Developer" },
      ],
    },
  ];
</script>

<section id="skills" class="bg-gray-700">
  <div class="container mx-auto py-12 px-8 space-y-8 md:py-16">
    <h2 class="text-3xl text-center md:text-left">Technologies I've Used</h2>
    {#each skillCategories as { category, skills }}
      <h3 class="text-2xl">{category}</h3>
      <div
        class="flex flex-row overflow-x-scroll overflow-y-hidden text-gray-400 space-x-8 sm:space-x-0 sm:grid sm:gap-y-8 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12">
        {#each skills as skill}
          <SkillTile {...skill} />
        {/each}
      </div>
    {/each}
  </div>
</section>
