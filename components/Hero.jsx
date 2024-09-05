import DropdownMenu from "./UI/DropdownMenu";
const Hero = () => {
  return (
    <>
      <section class="flex h-full flex-col items-center justify-center pt-32">
        <div class="flex w-full max-w-lg flex-col items-center justify-center text-center">
          <h1 class="relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50">
            <p>Animated</p>Buttons for your next projects.
          </h1>
          <p class="text-center text-white/90 ">
            Motion components. Easy to copy and paste. Customizable. Open
            source. Built for react developers.
          </p>
        </div>
        <div class="flex items-center space-x-4 py-6">
       
        </div>
      <DropdownMenu />
      </section>
    </>
  );
};

export default Hero;
