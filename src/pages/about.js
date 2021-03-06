import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = props => {
  const labels = props.data.site.siteMetadata.labels
  const aboutTags = ["react", "nodejs", "html", "css"]
  const tags = {}
  labels.forEach(label => {
    aboutTags.forEach(tag => {
      if (tag === label.tag) {
        tags[tag] = label.name
      }
    })
  })

  return (
    <Layout>
      <SEO title="About" />
      <div className="post-page-main">
        <div className="px-5 py-2 sidebar">
          <Sidebar />
        </div>

        <div className="post-main">
          {/*              <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>Developer Diary is a Gatsby Starter blog template created with web developers in mind, but really, anyone can use it. It's totally usable right out of the box, but minimalist enough to be easily modifiable to suit your needs.</i></p>
                        <br />
                        <h4>Features</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="ml-3 align-top d-inline-block w-75">Blazing fast, as you'd expect from a Gatsby site</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="ml-3 align-top d-inline-block w-75">Tech tags designed for web developers</p>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name={tags["react"]} size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                            </div>  
                        </div>
                        <div className="mt-4">
                            <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="ml-3 align-top d-inline-block w-75">Includes Prism for code block styling in markdown files</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="ml-3 align-top d-inline-block w-75">Developer-relevant social-media icon links including GitHub, Stack Overflow and freeCodeCamp</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="ml-3 align-top d-inline-block w-75">Mobile responsive, of course</p>
                        </div>
                    </div>
        */}
          <p>
            Less is <em>More</em>. Slower is <em>Faster</em>.
          </p>
          <p>
            Stand up for:
            <ul>
              <li>curiosity</li>
              <li>creation</li>
              <li>efficiency</li>
              <li>openness and collaboration</li>
              <li>awesome things</li>
            </ul>
          </p>
          {/*<p>Blogger/Developer/Hacker/Scientist/Painter</p>*/}
          <p>
            Bring something interesting or useful to others. Be awesome. Happy
            hacking.
          </p>
          <p></p>
          <p>
            Many thanks to all the awesome developers, you inspired me when I
            was in darkness.
          </p>
          <p>
            Interests: algorithm, theory, web apps (frontend + backend),
            computer graphics, machine learning
          </p>
          <p>This page is still building ...</p>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    site {
      siteMetadata {
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
  }
`

export default AboutPage
