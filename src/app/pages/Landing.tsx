import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Search } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";

const featuredBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest",
    year: "2009",
    cover: "https://images.unsplash.com/photo-1683279705183-6543523ea72e?w=400",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: "2008",
    cover: "https://images.unsplash.com/photo-1773606382007-afddea672b0e?w=400",
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Gang of Four",
    year: "1994",
    cover: "https://images.unsplash.com/photo-1773614207981-19bce2baa7e9?w=400",
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    year: "1999",
    cover: "https://images.unsplash.com/photo-1765969934422-077ccae29246?w=400",
  },
  {
    id: 5,
    title: "Structure and Interpretation",
    author: "Abelson & Sussman",
    year: "1996",
    cover: "https://images.unsplash.com/photo-1773266109454-765e229ccc4a?w=400",
  },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="relative" style={{ height: '75vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1696197018935-fe03c621838f?w=1920&h=1200&fit=crop"
            alt="Library Interior"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(1px) brightness(0.4)' }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <h1
              className="text-ivory"
              style={{
                fontSize: '4.5rem',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: 500,
              }}
            >
              Library & Archives
            </h1>

            <p
              className="text-ivory/90 max-w-2xl mx-auto"
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em',
                fontWeight: 300,
              }}
            >
              A curated collection of academic resources for the Department of Computer Science
            </p>

            <div className="max-w-2xl mx-auto">
              <div
                className="bg-ivory/95 backdrop-blur-sm rounded-sm p-2 flex items-center gap-4"
                style={{ border: '1px solid rgba(184, 168, 136, 0.2)' }}
              >
                <Search className="ml-4" style={{ color: 'var(--soft-grey)', width: '20px', height: '20px' }} />
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  className="flex-1 bg-transparent border-none outline-none py-4 px-2"
                  style={{
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                    fontWeight: 300,
                  }}
                />
                <Link
                  to="/catalog"
                  className="px-8 py-3 rounded-sm mr-2 transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--midnight-blue)',
                    color: 'var(--ivory)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                  }}
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="flex items-baseline justify-between mb-16">
          <h2
            style={{
              fontSize: '2.5rem',
              color: 'var(--midnight-blue)',
              fontWeight: 500,
            }}
          >
            Featured Collections
          </h2>
          <Link
            to="/catalog"
            className="transition-colors duration-300"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted-gold)',
              fontWeight: 400,
            }}
          >
            View All →
          </Link>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8" style={{ scrollbarWidth: 'thin' }}>
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="flex-shrink-0 group"
              style={{ width: '240px' }}
            >
              <div className="space-y-6">
                <div
                  className="bg-warm-beige overflow-hidden transition-all duration-500"
                  style={{
                    height: '340px',
                    border: '1px solid rgba(26, 35, 50, 0.08)',
                  }}
                >
                  <ImageWithFallback
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2 px-1">
                  <h3
                    className="transition-colors duration-300"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--midnight-blue)',
                      lineHeight: '1.4',
                    }}
                  >
                    {book.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--soft-grey)',
                      fontWeight: 300,
                    }}
                  >
                    {book.author}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--muted-gold)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {book.year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="border-t py-12"
        style={{ borderColor: 'rgba(26, 35, 50, 0.08)', backgroundColor: 'var(--soft-beige)' }}
      >
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center space-y-3">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--soft-grey)', textTransform: 'uppercase' }}>
              University of Peshawar · Department of Computer Science
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--soft-grey)', fontWeight: 300 }}>
              Library Management System · Est. 1950
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
