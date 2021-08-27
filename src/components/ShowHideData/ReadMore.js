//Data hide show functionality 
import { useState } from "react";
import './ReadMore.module.css';


export default function Readmore() {
  const [readMore, setReadMore] = useState(false);
  const info =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat turpis vehicula orci placerat tempor. Integer sed dolor cursus, tincidunt ex ultricies, iaculis eros. Praesent tristique at velit eget convallis. Proin ut hendrerit orci. Nam at nibh quis enim dictum feugiat rutrum quis erat. Curabitur eget sapien viverra, semper sem vitae, fringilla odio. Aenean leo ex, fermentum nec bibendum eget, auctor ac leo. Vivamus maximus vitae dolor et accumsan. Aenean et neque est. Etiam eu consequat quam. Morbi placerat egestas ante nec varius. Etiam rutrum dignissim quam, ac molestie justo lacinia nec.";
  return (
    <article className="container">
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
    </article>
  );
}
