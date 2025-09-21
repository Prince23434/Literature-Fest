import { useEffect, useRef } from "react";

const InstagramEmbed = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.instgrm) {
      // process *only this blockquote* when url changes
      window.instgrm.Embeds.process(ref.current);
    }
  }, [url]);

  return (
    <div className="flex justify-center p-4 w-full">
      <blockquote
        ref={ref}
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "8px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          width: "100%",
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
