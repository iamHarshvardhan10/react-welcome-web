const Categories = () => {
  const leftCategories = [
    "Webinars",
    "Product Demos",
    "Community Events",
    "AMAs",
    "Multi-track",
  ];

  const rightCategories = [
    "Company Meetings",
    "Customer Training",
    "Fireside Chat",
    "Kick-offs",
    "Workshops",
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div>
            {leftCategories.map((category, index) => (
              <div key={`left-${index}`}>
                <a
                  href="#"
                  className="block py-8 text-center text-gray-300 hover:text-white text-xl font-light transition-colors"
                >
                  {category}
                </a>
                {index < leftCategories.length - 1 && (
                  <div className="border-t border-gray-800"></div>
                )}
              </div>
            ))}
          </div>

          <div>
            {rightCategories.map((category, index) => (
              <div key={`right-${index}`}>
                <a
                  href="#"
                  className="block py-8 text-center text-gray-300 hover:text-white text-xl font-light transition-colors"
                >
                  {category}
                </a>
                {index < rightCategories.length - 1 && (
                  <div className="border-t border-gray-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
