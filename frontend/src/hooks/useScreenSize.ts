import { useEffect, useState } from 'react';

const getIsMobile = (size: number) => window.innerWidth < size; // 640,768,1024,1280

export default function useScreenSize(screen: number) {
  const [isMobile, setIsMobile] = useState(getIsMobile(screen));

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile(screen));
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile;
}
// const windowWidth = ref(window.innerWidth);

// const onWidthChange = () => windowWidth.value = window.innerWidth;
// onMounted(() => window.addEventListener('resize', onWidthChange));
// onUnmounted(() => window.removeEventListener('resize', onWidthChange));

// const isMobile = computed(() => windowWidth.value < 768);

// return isMobile;
