
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import {urlFor} from 'lib/api';

const serializers = {
  types: {
    code: ({node:{language,code,filename}}) => {
      return (
      <HighlightCode language={language}>
        {code}
        <div className="code-filename">{filename}</div>
      </HighlightCode>
    )},
    image: ({node: {asset, alt, position='center',crop,hotspot}}) =>{
      
      return (
          <div className={`blog-image blog-image-${position}`} >
              <img src={urlFor({asset,crop,hotspot}).height(300).fit('clip').url()} className="col-md-12" />
              <div className="image-alt">{alt}</div>
          </div>
      )
    }
  }
}

const BlogContent = ({content}) => 
      <BlockContent 
      serializers={serializers}
      blocks={content}
      />

export default BlogContent;
