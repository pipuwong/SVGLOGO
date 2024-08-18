import { c as create_ssr_component, a as add_attribute, f as escape, v as validate_component } from "./ssr.js";
import { c as cn } from "./cn.js";
const Endpoints = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { method } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div${add_attribute("class", cn("border-2 border-neutral-100 dark:border-neutral-800 rounded-lg", "p-4 mb-2"), 0)}><div class="flex items-center space-x-4 mb-4"><p${add_attribute("class", cn("m-0 rounded-md font-medium px-1.5 py-0.5 text-sm leading-5 select-none", method === "GET" && " text-green-600 dark:text-green-500 bg-green-400/20 dark:bg-green-400/20", method === "POST" && " text-blue-600 dark:text-blue-500 bg-blue-400/20 dark:bg-blue-400/20", method === "PUT" && " text-yellow-600 dark:text-yellow-500 bg-yellow-400/20 dark:bg-yellow-400/20", method === "PATCH" && " text-yellow-600 dark:text-yellow-500 bg-yellow-400/20 dark:bg-yellow-400/20", method === "DELETE" && " text-red-600 dark:text-red-500 bg-red-400/20 dark:bg-red-400/20"), 0)}>${escape(method)}</p> <div class="flex flex-col space-y-0 m-0"><h3 class="m-0 font-medium">${escape(title)}</h3> <p class="mb-0 font-mono text-sm">${escape(description)}</p></div></div> ${slots.default ? slots.default({}) : ``}</div>`;
});
const metadata = {
  "title": "API Reference",
  "description": "The API reference is a detailed documentation of all the endpoints available in the SVGL API."
};
const Api = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1ukekoe">Introduction</h2> <p data-svelte-h="svelte-v0iq2t">SVGL API is a RESTFul API that allows you to get all the information of the SVGs that are in the repository.</p> <h2 data-svelte-h="svelte-rf67px">Limitations</h2> <p data-svelte-h="svelte-1cgjru8">The API is currently open to everyone and does not require any authentication. However, to prevent abusive use of the API, there is a limit to the number of requests.</p> <h2 data-svelte-h="svelte-rdwjbe">Base URL</h2> <p data-svelte-h="svelte-qy53yh">The base URL for the API is:</p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">https://svgl.app/api/svgs</span></span>
<span class="line"><span style="color:#758575DD"># or</span></span>
<span class="line"><span style="color:#80A665">https://svgl.app/api/categories</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 data-svelte-h="svelte-17fci6">Typescript usage</h2> <ul data-svelte-h="svelte-1f7htc"><li>For categories:</li></ul> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> interface</span><span style="color:#5DA994"> Category</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">  category</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  total</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <ul data-svelte-h="svelte-100rpxl"><li>For SVGs:</li></ul> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#CB7676">type</span><span style="color:#5DA994"> ThemeOptions</span><span style="color:#666666"> =</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">  light</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  dark</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375">export</span><span style="color:#CB7676"> interface</span><span style="color:#5DA994"> iSVG</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#BD976A">  id</span><span style="color:#666666">: </span><span style="color:#5DA994">number</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  title</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  category</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">string</span><span style="color:#666666">[];</span></span>
<span class="line"><span style="color:#BD976A">  route</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">ThemeOptions</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  wordmark</span><span style="color:#CB7676">?</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666"> | </span><span style="color:#5DA994">ThemeOptions</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#BD976A">  url</span><span style="color:#666666">: </span><span style="color:#5DA994">string</span><span style="color:#666666">;</span></span>
<span class="line"><span style="color:#666666">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 data-svelte-h="svelte-uxxdeg">Endpoints</h2> ${validate_component(Endpoints, "Endpoint").$$render(
    $$result,
    {
      title: "Get all SVGs",
      method: "GET",
      description: "Returns all the SVGs in the repository."
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">/api/svgs</span></span></code></pre>`}<!-- HTML_TAG_END --> <p></p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// Returns:</span></span>
<span class="line"><span style="color:#666666">[</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">id</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 0</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">title</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Discord</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Software</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">route</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://svgl.app/discord.svg</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">url</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://discord.com/</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">  &#125;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic">  ...</span></span>
<span class="line"><span style="color:#666666">]</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
      }
    }
  )} ${validate_component(Endpoints, "Endpoint").$$render(
    $$result,
    {
      title: "Get a limited number of SVGs",
      method: "GET",
      description: "Returns a limited number of SVGs in the repository. Start from the first SVG."
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">/api/svgs?limit</span><span style="color:#DBD7CAEE">=10</span></span></code></pre>`}<!-- HTML_TAG_END --> <p></p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// Returns:</span></span>
<span class="line"><span style="color:#666666">[</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">id</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 0</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">title</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Discord</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Software</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">route</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://svgl.app/discord.svg</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">url</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://discord.com/</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">  &#125;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic">  ...</span></span>
<span class="line"><span style="color:#666666">]</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
      }
    }
  )} ${validate_component(Endpoints, "Endpoint").$$render(
    $$result,
    {
      title: "Filter SVGs by category",
      method: "GET",
      description: "Returns all the SVGs in the repository that match the category."
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">/api/svgs?category</span><span style="color:#DBD7CAEE">=software</span></span></code></pre>`}<!-- HTML_TAG_END --> <p></p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// Returns:</span></span>
<span class="line"><span style="color:#666666">[</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">id</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 0</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">title</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Discord</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Software</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">route</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://svgl.app/discord.svg</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">url</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://discord.com/</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">  &#125;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic">  ...</span></span>
<span class="line"><span style="color:#666666">]</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-hzswk6">The list of categories is available <a href="https://github.com/pheralb/svgl/blob/main/src/types/categories.ts" rel="nofollow">here</a> (except for the <em>all</em> category).</p>`;
      }
    }
  )} ${validate_component(Endpoints, "Endpoint").$$render(
    $$result,
    {
      title: "Get only categories",
      method: "GET",
      description: "Returns only categories with the number of SVGs in each category."
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">/api/categories</span></span></code></pre>`}<!-- HTML_TAG_END --> <p></p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// Returns:</span></span>
<span class="line"><span style="color:#666666">[</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Software</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">total</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 97</span></span>
<span class="line"><span style="color:#666666">  &#125;,</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Library</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">total</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 25</span></span>
<span class="line"><span style="color:#666666">  &#125;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic">  ...</span></span>
<span class="line"><span style="color:#666666">]</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
      }
    }
  )} ${validate_component(Endpoints, "Endpoint").$$render(
    $$result,
    {
      title: "Search SVGs by name",
      method: "GET",
      description: "Returns all the SVGs in the repository that match the name."
    },
    {},
    {
      default: () => {
        return `<!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#80A665">/api/svgs?search</span><span style="color:#DBD7CAEE">=axiom</span></span></code></pre>`}<!-- HTML_TAG_END --> <p></p> <!-- HTML_TAG_START -->${`<pre class="shiki vitesse-dark" style="background-color:#121212;color:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#758575DD">// Returns:</span></span>
<span class="line"><span style="color:#666666">[</span></span>
<span class="line"><span style="color:#666666">  &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">id</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#4C9A91"> 267</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">title</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Axiom</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">category</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">Software</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">route</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#666666"> &#123;</span></span>
<span class="line"><span style="color:#C98A7D99">      "</span><span style="color:#B8A965">light</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://svgl.app/axiom-light.svg</span><span style="color:#C98A7D99">"</span><span style="color:#666666">,</span></span>
<span class="line"><span style="color:#C98A7D99">      "</span><span style="color:#B8A965">dark</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://svgl.app/axiom-dark.svg</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">    &#125;,</span></span>
<span class="line"><span style="color:#C98A7D99">    "</span><span style="color:#B8A965">url</span><span style="color:#C98A7D99">"</span><span style="color:#666666">:</span><span style="color:#C98A7D99"> "</span><span style="color:#C98A7D">https://axiom.co/</span><span style="color:#C98A7D99">"</span></span>
<span class="line"><span style="color:#666666">  &#125;</span></span>
<span class="line"><span style="color:#666666">]</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
      }
    }
  )}`;
});
export {
  Api as default,
  metadata
};
