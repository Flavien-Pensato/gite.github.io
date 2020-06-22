import dynamic from 'next/dynamic'

export default () => {
  const MDXContent = dynamic(() => import(`../site/photos.mdx`))
  
  return (
    <MDXContent />
  )
}
