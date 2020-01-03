/* eslint jsx-a11y/heading-has-content: 0 */

import React from "react";
// import styled from 'styled-components';
import { MDXProvider } from "@mdx-js/react";

import Layout from "./Layout";

// const Container = styled.div`
//   margin-top: 2rem;
//   margin-bottom: 4rem;
//   h1 {
//     margin-top: 2.5rem;
//     margin-bottom: 1.5rem;
//   }
//   h3 {
//     margin-top: 2.5rem;
//     margin-bottom: 1.5rem;
//   }
//   p {
//     margin-bottom: 1rem;
//     font-size: 18px;
//   }
//   .page-content {
//     img {
//       display: flex;
//       margin: 3rem auto 4rem auto;
//       box-shadow: ${props => props.theme.boxShadow};
//     }
//   }
// `;

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <div className="bg-white">
        <MDXProvider
          components={{
            h1: props => (
              <h1
                className="text-5xl text-black flex justify-center"
                {...props}
              />
            ),
            h2: props => <h2 className="text-black" {...props} />,
            h3: props => <h3 className="text-black" {...props} />,
            p: props => <p className="text-black mx-20 my-8" {...props} />
          }}
        >
          {children}
        </MDXProvider>
      </div>
    </Layout>
  );
}
