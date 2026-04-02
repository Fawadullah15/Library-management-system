import { Navigation } from "../components/Navigation";
import { Search } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { useState } from "react";

const books = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson",
    year: "2009",
    isbn: "978-0-262-03384-8",
    department: "Computer Science",
    status: "Available",
    cover: "https://images.unsplash.com/photo-1683279705183-6543523ea72e?w=300",
  },
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    year: "2008",
    isbn: "978-0-132-35088-4",
    department: "Software Engineering",
    status: "Available",
    cover: "https://images.unsplash.com/photo-1773606382007-afddea672b0e?w=300",
  },
  {
    id: 3,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    year: "1994",
    isbn: "978-0-201-63361-0",
    department: "Software Engineering",
    status: "Borrowed",
    cover: "https://images.unsplash.com/photo-1773614207981-19bce2baa7e9?w=300",
  },
  {
    id: 4,
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas, Andrew Hunt",
    year: "2019",
    isbn: "978-0-135-95705-9",
    department: "Computer Science",
    status: "Available",
    cover: "https://images.unsplash.com/photo-1765969934422-077ccae29246?w=300",
  },
  {
    id: 5,
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson, Gerald Jay Sussman",
    year: "1996",
    isbn: "978-0-262-51087-5",
    department: "Computer Science",
    status: "Reserved",
    cover: "https://images.unsplash.com/photo-1773266109454-765e229ccc4a?w=300",
  },
  {
    id: 6,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    year: "2020",
    isbn: "978-0-134-61099-3",
    department: "Artificial Intelligence",
    status: "Available",
    cover: "https://images.unsplash.com/photo-1683279705183-6543523ea72e?w=300",
  },
];

export function Catalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <h1
            className="mb-8"
            style={{
              fontSize: '3.5rem',
              color: 'var(--midnight-blue)',
              fontWeight: 500,
            }}
          >
            Catalog
          </h1>

          <div
            className="bg-soft-beige rounded-sm p-2 flex items-center gap-4"
            style={{ border: '1px solid rgba(26, 35, 50, 0.1)' }}
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
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="w-64 flex-shrink-0 space-y-12">
            <div>
              <label
                className="block mb-6"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--midnight-blue)',
                  fontWeight: 500,
                }}
              >
                Department
              </label>
              <div className="space-y-4">
                {["All Departments", "Computer Science", "Software Engineering", "Artificial Intelligence", "Data Science"].map((dept) => (
                  <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="department"
                      defaultChecked={dept === "All Departments"}
                      className="w-4 h-4"
                      style={{ accentColor: 'var(--muted-gold)' }}
                    />
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                        textTransform: 'none',
                      }}
                    >
                      {dept}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div>
              <label
                className="block mb-6"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--midnight-blue)',
                  fontWeight: 500,
                }}
              >
                Availability
              </label>
              <div className="space-y-4">
                {["All Books", "Available", "Borrowed", "Reserved"].map((status) => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="status"
                      defaultChecked={status === "All Books"}
                      className="w-4 h-4"
                      style={{ accentColor: 'var(--muted-gold)' }}
                    />
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                        textTransform: 'none',
                      }}
                    >
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div>
              <label
                className="block mb-6"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--midnight-blue)',
                  fontWeight: 500,
                }}
              >
                Publication Year
              </label>
              <div className="space-y-4">
                {["Any Year", "2020-2025", "2010-2019", "2000-2009", "Before 2000"].map((year) => (
                  <label key={year} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="year"
                      defaultChecked={year === "Any Year"}
                      className="w-4 h-4"
                      style={{ accentColor: 'var(--muted-gold)' }}
                    />
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                        textTransform: 'none',
                      }}
                    >
                      {year}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-12">
              <p style={{ fontSize: '0.9rem', color: 'var(--soft-grey)', fontWeight: 300 }}>
                {books.length} books found
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className="px-4 py-2 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: viewMode === "grid" ? 'var(--warm-beige)' : 'transparent',
                    color: viewMode === "grid" ? 'var(--midnight-blue)' : 'var(--soft-grey)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(26, 35, 50, 0.1)',
                  }}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className="px-4 py-2 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: viewMode === "list" ? 'var(--warm-beige)' : 'transparent',
                    color: viewMode === "list" ? 'var(--midnight-blue)' : 'var(--soft-grey)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(26, 35, 50, 0.1)',
                  }}
                >
                  List
                </button>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-3 gap-8">
                {books.map((book) => (
                  <Link
                    key={book.id}
                    to={`/book/${book.id}`}
                    className="group"
                  >
                    <div className="space-y-6">
                      <div
                        className="bg-warm-beige overflow-hidden transition-all duration-500"
                        style={{
                          height: '320px',
                          border: '1px solid rgba(26, 35, 50, 0.08)',
                        }}
                      >
                        <ImageWithFallback
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-3 px-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            className="transition-colors duration-300 flex-1"
                            style={{
                              fontSize: '1.05rem',
                              color: 'var(--midnight-blue)',
                              lineHeight: '1.4',
                            }}
                          >
                            {book.title}
                          </h3>
                          <span
                            className="px-3 py-1 rounded-sm flex-shrink-0"
                            style={{
                              fontSize: '0.7rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              backgroundColor: book.status === "Available" ? 'rgba(184, 168, 136, 0.15)' : 'rgba(138, 139, 143, 0.1)',
                              color: book.status === "Available" ? 'var(--muted-gold)' : 'var(--soft-grey)',
                              fontWeight: 400,
                            }}
                          >
                            {book.status}
                          </span>
                        </div>
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
            ) : (
              <div className="space-y-1">
                {books.map((book) => (
                  <Link
                    key={book.id}
                    to={`/book/${book.id}`}
                    className="flex items-center gap-8 py-8 px-6 transition-all duration-300 hover:bg-soft-beige/50"
                    style={{ borderBottom: '1px solid rgba(26, 35, 50, 0.06)' }}
                  >
                    <div
                      className="bg-warm-beige overflow-hidden flex-shrink-0"
                      style={{
                        width: '80px',
                        height: '110px',
                        border: '1px solid rgba(26, 35, 50, 0.08)',
                      }}
                    >
                      <ImageWithFallback
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3
                        style={{
                          fontSize: '1.15rem',
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
                      <div className="flex items-center gap-6">
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
                        <p
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--soft-grey)',
                            fontWeight: 300,
                          }}
                        >
                          {book.isbn}
                        </p>
                      </div>
                    </div>

                    <span
                      className="px-4 py-2 rounded-sm"
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        backgroundColor: book.status === "Available" ? 'rgba(184, 168, 136, 0.15)' : 'rgba(138, 139, 143, 0.1)',
                        color: book.status === "Available" ? 'var(--muted-gold)' : 'var(--soft-grey)',
                        fontWeight: 400,
                      }}
                    >
                      {book.status}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-16 flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="w-10 h-10 rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: page === 1 ? 'var(--midnight-blue)' : 'transparent',
                    color: page === 1 ? 'var(--ivory)' : 'var(--soft-grey)',
                    border: '1px solid rgba(26, 35, 50, 0.1)',
                    fontSize: '0.9rem',
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
