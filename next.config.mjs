import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code';



/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}


export default withMDX(nextConfig)