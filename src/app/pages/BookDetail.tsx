import { Navigation } from "../components/Navigation";
import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

const bookData = {
  1: {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    publisher: "MIT Press",
    year: "2009",
    edition: "3rd Edition",
    isbn: "978-0-262-03384-8",
    department: "Computer Science",
    category: "Algorithms & Data Structures",
    pages: 1312,
    language: "English",
    status: "Available",
    location: "Section A, Shelf 12",
    cover: "https://images.unsplash.com/photo-1683279705183-6543523ea72e?w=600",
    description: "This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. The book is also suitable as a reference for professionals and researchers in computer science, mathematics, and engineering.",
    tags: ["Algorithms", "Data Structures", "Computer Science", "Programming", "Theory"],
  },
};

export function BookDetail() {
  const { id } = useParams();
  const book = bookData[id as keyof typeof bookData] || bookData[1];

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-12 py-16">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 mb-12 transition-colors duration-300"
          style={{
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--soft-grey)',
            fontWeight: 400,
          }}
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </Link>

        <div className="flex gap-16">
          <div className="w-96 flex-shrink-0">
            <div
              className="bg-warm-beige overflow-hidden sticky top-8"
              style={{
                height: '550px',
                border: '1px solid rgba(26, 35, 50, 0.08)',
              }}
            >
              <ImageWithFallback
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <span
                  className="inline-block px-4 py-2 rounded-sm"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    backgroundColor: 'rgba(184, 168, 136, 0.15)',
                    color: 'var(--muted-gold)',
                    fontWeight: 400,
                  }}
                >
                  {book.status}
                </span>

                <h1
                  style={{
                    fontSize: '3rem',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    lineHeight: '1.2',
                  }}
                >
                  {book.title}
                </h1>
              </div>

              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--soft-grey)',
                  fontWeight: 300,
                  lineHeight: '1.6',
                }}
              >
                {book.author}
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {[
                { label: "Publisher", value: book.publisher },
                { label: "Year", value: book.year },
                { label: "Edition", value: book.edition },
                { label: "ISBN", value: book.isbn },
                { label: "Department", value: book.department },
                { label: "Category", value: book.category },
                { label: "Pages", value: book.pages.toString() },
                { label: "Language", value: book.language },
                { label: "Location", value: book.location },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <label
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      color: 'var(--soft-grey)',
                      fontWeight: 500,
                      display: 'block',
                    }}
                  >
                    {item.label}
                  </label>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--midnight-blue)',
                      fontWeight: 300,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div className="space-y-4">
              <label
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--soft-grey)',
                  fontWeight: 500,
                  display: 'block',
                }}
              >
                Description
              </label>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--midnight-blue)',
                  fontWeight: 300,
                  lineHeight: '1.8',
                }}
              >
                {book.description}
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div className="space-y-4">
              <label
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--soft-grey)',
                  fontWeight: 500,
                  display: 'block',
                }}
              >
                Tags
              </label>
              <div className="flex flex-wrap gap-3">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-sm"
                    style={{
                      fontSize: '0.8rem',
                      backgroundColor: 'var(--soft-beige)',
                      color: 'var(--midnight-blue)',
                      fontWeight: 300,
                      border: '1px solid rgba(26, 35, 50, 0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

            <div className="flex gap-4 pt-4">
              <button
                className="px-10 py-4 rounded-sm transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--midnight-blue)',
                  color: 'var(--ivory)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  border: '1px solid var(--midnight-blue)',
                }}
              >
                Borrow Book
              </button>
              <button
                className="px-10 py-4 rounded-sm transition-all duration-300 hover:bg-soft-beige"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--midnight-blue)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  border: '1px solid rgba(26, 35, 50, 0.2)',
                }}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
