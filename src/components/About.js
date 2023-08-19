function About({blogImage,aboutText}){
    return(
        <aside><img src={blogImage || "https://via.placeholder.com/215"} alt="blog logo" />
        <p>{aboutText}</p>
        </aside>
    )
}
export default About