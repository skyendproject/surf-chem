"use client";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getCompanyHistory } from "@/lib/backend";
import { useEffect, useRef, useState } from "react";

export default function CompanyHistoryPage() {
  const [html, setHtml] = useState<string>('');
  useEffect(() => {
    getCompanyHistory().then(setHtml);
    return () => { }
  }, [])

  return (
    <>
      <div className="bg-white">
        <Navigation />
        <IframeContent html={html} />
        <Footer />
      </div>
    </>
  );
}

const IframeContent = ({ html }: { html: string }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState<string | number>('200px');

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;
    const body = doc.body;
    const htmlEl = doc.documentElement;
    const newHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      htmlEl.scrollHeight,
      htmlEl.offsetHeight
    );
    setHeight(newHeight);
  };

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      style={{
        width: '100%',
        height: height,
        border: 'none',
        overflow: 'hidden',
      }}
      frameBorder="0"
      scrolling="no"
      onLoad={handleLoad}
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
};
