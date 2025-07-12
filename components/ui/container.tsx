const Container = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={`${className} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
};

export default Container;
