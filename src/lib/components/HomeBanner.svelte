<script>
    import { onMount, onDestroy } from 'svelte';
    import { images } from '$lib/imagesPlaceHolder';
    
    // Props
    export let autoplay = true;
    export let interval = 5000;
    // export let overlayTexts = Array(images.length).fill('Image Description');
    export let showIndicators = true;
    export let showArrows = true;
    
    // State
    let currentIndex = 0;
    let timer = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Set up autoplay
    onMount(() => {
      if (autoplay) {
        startAutoplay();
      }
    });
    
    onDestroy(() => {
      if (timer) clearInterval(timer);
    });
    
    function startAutoplay() {
      timer = setInterval(() => {
        goToNext();
      }, interval);
    }
    
    function stopAutoplay() {
      if (timer) clearInterval(timer);
    }
    
    function goToNext() {
      currentIndex = (currentIndex + 1) % images.length;
    }
    
    function goToPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    
    function goToSlide(index = 0) {
      currentIndex = index;
      if (autoplay) {
        stopAutoplay();
        startAutoplay();
      }
    }
    
    function handleTouchStart(e) {
      touchStartX = e.touches[0].clientX;
    }
    
    function handleTouchMove(e) {
      touchEndX = e.touches[0].clientX;
    }
    
    function handleTouchEnd() {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        goToNext();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        goToPrev();
      }
      
      // Reset touch coordinates
      touchStartX = 0;
      touchEndX = 0;
    }
    
    // Pause autoplay when mouse is over the carousel
    function handleMouseEnter() {
      if (autoplay) stopAutoplay();
    }
    
    function handleMouseLeave() {
      if (autoplay) startAutoplay();
    }
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
    class="relative w-full h-screen overflow-visible"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={handleTouchEnd}
    aria-controls="true"
  >
    <!-- Carousel items -->
    <div class="relative h-screen">
        {#each images as image, index}
        <div 
            class="absolute inset-0 transition-opacity duration-700 ease-in-out"
            class:opacity-0={currentIndex !== index}
            class:opacity-100={currentIndex === index}
        >
            <img 
            src={image.src} 
            alt={image.alt} 
            class="object-cover w-full h-full"
            />
            <div class="absolute inset-0 flex items-center justify-start">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="z-10 ml-24 text-start text-white max-w-5xl">
                <h3 class="text-5xl font-black mb-2 text-balance">{image.title}</h3>
                <p class="text-lg">{image.subtitle}</p>
            </div>
            </div>
        </div>
        {/each}
    </div>
  
    <!-- Slider indicators -->
    {#if showIndicators}
      <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {#each images as _, index}
          <button 
            type="button" 
            class="w-3 h-3 rounded-full transition-colors duration-300"
            class:bg-white={currentIndex === index}
            class:bg-gray-400={currentIndex !== index}
            on:click={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        {/each}
      </div>
    {/if}
    
    <!-- Slider controls -->
    {#if showArrows}
      <button 
        type="button" 
        class="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity duration-300"
        on:click={goToPrev}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        type="button" 
        class="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity duration-300"
        on:click={goToNext}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    {/if}
  </div>