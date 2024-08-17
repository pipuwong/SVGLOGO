<script lang="ts">
  import type { iSVG } from '@/types/svg';

  import { ClipboardIcon, CopyIcon, Loader, X } from 'lucide-svelte';
  import { toast } from 'svelte-sonner';
  import * as Popover from '@/ui/popover';

  // Utils:
  import { getSvgContent } from '@/utils/getSvgContent';
  import { clipboard } from '@/utils/clipboard';
  import { buttonStyles } from '@/ui/styles';
  import { cn } from '@/utils/cn';

  // Props:
  export let iconSize = 24;
  export let iconStroke = 2;
  export let isWordmarkSvg = false;
  export let svgInfo: iSVG;
  let optionsOpen = false;
  let isLoading = false;

  const getSvgUrl = () => {
    let svgUrlToCopy;
    const dark = document.documentElement.classList.contains('dark');

    if (isWordmarkSvg) {
      const svgHasTheme = typeof svgInfo.wordmark !== 'string';
      if (!svgHasTheme) {
        svgUrlToCopy =
          typeof svgInfo.wordmark === 'string'
            ? svgInfo.wordmark
            : "Something went wrong. Couldn't copy the SVG.";
      }

      svgUrlToCopy =
        typeof svgInfo.wordmark !== 'string'
          ? dark
            ? svgInfo.wordmark?.dark
            : svgInfo.wordmark?.light
          : svgInfo.wordmark;
    } else {
      const svgHasTheme = typeof svgInfo.route !== 'string';
      if (!svgHasTheme) {
        svgUrlToCopy =
          typeof svgInfo.route === 'string'
            ? svgInfo.route
            : "Something went wrong. Couldn't copy the SVG.";
      }
      svgUrlToCopy =
        typeof svgInfo.route !== 'string'
          ? dark
            ? svgInfo.route.dark
            : svgInfo.route.light
          : svgInfo.route;
    }

    return svgUrlToCopy;
  };

  // Copy SVG to clipboard:
  const copyToClipboard = async () => {
    const svgUrlToCopy = getSvgUrl();
    optionsOpen = false;

    const content = await getSvgContent(svgUrlToCopy);
    await clipboard(content);

    const category = Array.isArray(svgInfo.category)
      ? svgInfo.category.sort().join(' - ')
      : svgInfo.category;

    if (isWordmarkSvg) {
      toast.success('Copied wordmark SVG to clipboard', {
        description: `${svgInfo.title} - ${category}`
      });
      return;
    }

    toast.success('Copied to clipboard', {
      description: `${svgInfo.title} - ${category}`
    });
  };

  // Copy PNG to clipboard:
  const copyPngToClipboard = async (width: number, height: number) => {
    const svgUrlToCopy = getSvgUrl();
    optionsOpen = false;
    isLoading = true;

    const response = await fetch(svgUrlToCopy);
    const svgText = await response.text();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = async () => {
      // Set the desired width and height
      canvas.width = width;
      canvas.height = height;

      // Adjust the aspect ratio if necessary
      const aspectRatio = img.width / img.height;
      if (width / height > aspectRatio) {
        ctx?.drawImage(img, 0, 0, width, width / aspectRatio);
      } else {
        ctx?.drawImage(img, 0, 0, height * aspectRatio, height);
      }

      canvas.toBlob(async (blob) => {
        if (blob) {
          const clipboardItem = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([clipboardItem]);
          toast.success('Copied PNG to clipboard', {
            description: `${svgInfo.title} - ${svgInfo.category}`
          });
        }
      });
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgText);

    isLoading = false;
  };
</script>

<Popover.Root open={optionsOpen} onOpenChange={(isOpen) => (optionsOpen = isOpen)}>
  <Popover.Trigger
    title="Copy SVG or PNG"
    class="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
  >
    {#if optionsOpen}
      <X size={iconSize} strokeWidth={iconStroke} />
    {:else if isLoading}
      <Loader size={iconSize} strokeWidth={iconStroke} class="animate-spin" />
    {:else}
      <CopyIcon size={iconSize} strokeWidth={iconStroke} />
    {/if}
  </Popover.Trigger>
  <Popover.Content class="flex flex-col space-y-2" sideOffset={0.3}>
    <button
      class={cn(buttonStyles, 'rounded-md w-full')}
      title={isWordmarkSvg ? 'Copy wordmark SVG to clipboard' : 'Copy SVG to clipboard'}
      on:click={() => copyToClipboard()}
    >
      <ClipboardIcon size={16} strokeWidth={2} />
      <span>Copy SVG</span>
    </button>
    <button
      class={cn(buttonStyles, 'rounded-md w-full')}
      title="Copy PNG to clipboard"
      disabled={isLoading}
      on:click={() => copyPngToClipboard(500, 500)}
    >
      <ClipboardIcon size={16} strokeWidth={2} />
      <span>Copy PNG</span>
    </button>
  </Popover.Content>
</Popover.Root>
