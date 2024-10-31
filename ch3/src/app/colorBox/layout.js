export default function ColorBoxLayout({Children, left, right}){
  const isSidebar = true
return (
  <section>
    {Children}
    {/* {left} */}
    {/* {right} */}
    {isSidebar ? left : right}
  </section>
)
}