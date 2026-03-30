const Footer = () => {
  return (
    <>
      <footer className="bg-background border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="text-muted-foreground text-sm">
            &#169; {new Date().getFullYear()} AI Question Generator. All rights reserved.
          </div>

          <div className="text-muted-foreground text-sm">Built with ❤️ using Next.js</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
