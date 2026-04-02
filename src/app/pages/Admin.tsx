import { Navigation } from "../components/Navigation";
import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

const initialBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson",
    isbn: "978-0-262-03384-8",
    year: "2009",
    status: "Available",
    copies: 5,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "978-0-132-35088-4",
    year: "2008",
    status: "Available",
    copies: 3,
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Gang of Four",
    isbn: "978-0-201-63361-0",
    year: "1994",
    status: "Borrowed",
    copies: 2,
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    isbn: "978-0-135-95705-9",
    year: "2019",
    status: "Available",
    copies: 4,
  },
  {
    id: 5,
    title: "Structure and Interpretation",
    author: "Abelson & Sussman",
    isbn: "978-0-262-51087-5",
    year: "1996",
    status: "Reserved",
    copies: 2,
  },
];

export function Admin() {
  const [books, setBooks] = useState(initialBooks);
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    year: "",
    copies: 1,
  });

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.isbn) {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          ...newBook,
          status: "Available",
        },
      ]);
      setNewBook({ title: "", author: "", isbn: "", year: "", copies: 1 });
      setIsAddingBook(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h1
              className="mb-4"
              style={{
                fontSize: '3.5rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Administration
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--soft-grey)',
                fontWeight: 300,
              }}
            >
              Manage the library collection
            </p>
          </div>

          <button
            onClick={() => setIsAddingBook(!isAddingBook)}
            className="px-8 py-4 rounded-sm transition-all duration-300 hover:opacity-90 flex items-center gap-3"
            style={{
              backgroundColor: 'var(--midnight-blue)',
              color: 'var(--ivory)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            <Plus size={18} />
            Add Book
          </button>
        </div>

        {isAddingBook && (
          <div
            className="mb-12 p-10 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.08)' }}
          >
            <h3
              className="mb-8"
              style={{
                fontSize: '1.5rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Add New Book
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <label
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Title
                </label>
                <input
                  type="text"
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="w-full px-5 py-4 rounded-sm bg-ivory outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(26, 35, 50, 0.15)',
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                  }}
                  placeholder="Enter book title"
                />
              </div>

              <div className="space-y-3">
                <label
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Author
                </label>
                <input
                  type="text"
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  className="w-full px-5 py-4 rounded-sm bg-ivory outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(26, 35, 50, 0.15)',
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                  }}
                  placeholder="Enter author name"
                />
              </div>

              <div className="space-y-3">
                <label
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  ISBN
                </label>
                <input
                  type="text"
                  value={newBook.isbn}
                  onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
                  className="w-full px-5 py-4 rounded-sm bg-ivory outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(26, 35, 50, 0.15)',
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                  }}
                  placeholder="Enter ISBN"
                />
              </div>

              <div className="space-y-3">
                <label
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Year
                </label>
                <input
                  type="text"
                  value={newBook.year}
                  onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                  className="w-full px-5 py-4 rounded-sm bg-ivory outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(26, 35, 50, 0.15)',
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                  }}
                  placeholder="Enter publication year"
                />
              </div>

              <div className="space-y-3">
                <label
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    color: 'var(--midnight-blue)',
                    fontWeight: 500,
                    display: 'block',
                  }}
                >
                  Number of Copies
                </label>
                <input
                  type="number"
                  value={newBook.copies}
                  onChange={(e) => setNewBook({ ...newBook, copies: parseInt(e.target.value) })}
                  className="w-full px-5 py-4 rounded-sm bg-ivory outline-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(26, 35, 50, 0.15)',
                    fontSize: '1rem',
                    color: 'var(--midnight-blue)',
                  }}
                  min="1"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddBook}
                className="px-8 py-3 rounded-sm transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--midnight-blue)',
                  color: 'var(--ivory)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
              >
                Save Book
              </button>
              <button
                onClick={() => setIsAddingBook(false)}
                className="px-8 py-3 rounded-sm transition-all duration-300 hover:bg-warm-beige"
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
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="bg-ivory rounded-sm overflow-hidden" style={{ border: '1px solid rgba(26, 35, 50, 0.08)' }}>
          <div
            className="grid grid-cols-[2fr_1.5fr_1.2fr_0.6fr_0.8fr_0.6fr_0.8fr] gap-6 px-8 py-5"
            style={{
              backgroundColor: 'var(--soft-beige)',
              borderBottom: '1px solid rgba(26, 35, 50, 0.08)',
            }}
          >
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Title
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Author
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              ISBN
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Year
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Status
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Copies
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Actions
            </div>
          </div>

          {books.map((book, index) => (
            <div
              key={book.id}
              className="grid grid-cols-[2fr_1.5fr_1.2fr_0.6fr_0.8fr_0.6fr_0.8fr] gap-6 px-8 py-6 transition-colors duration-300 hover:bg-soft-beige/30"
              style={{
                borderBottom: index < books.length - 1 ? '1px solid rgba(26, 35, 50, 0.04)' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--midnight-blue)',
                  fontWeight: 300,
                }}
              >
                {book.title}
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--soft-grey)',
                  fontWeight: 300,
                }}
              >
                {book.author}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--soft-grey)',
                  fontWeight: 300,
                }}
              >
                {book.isbn}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--soft-grey)',
                  fontWeight: 300,
                }}
              >
                {book.year}
              </div>
              <div>
                <span
                  className="px-3 py-1 rounded-sm inline-block"
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
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--midnight-blue)',
                  fontWeight: 300,
                }}
              >
                {book.copies}
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="transition-colors duration-300 hover:opacity-70"
                  style={{ color: 'var(--muted-gold)' }}
                >
                  <Edit2 size={16} />
                </button>
                <button
                  className="transition-colors duration-300 hover:opacity-70"
                  style={{ color: 'var(--destructive)' }}
                  onClick={() => setBooks(books.filter((b) => b.id !== book.id))}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p style={{ fontSize: '0.9rem', color: 'var(--soft-grey)', fontWeight: 300 }}>
            Showing {books.length} books
          </p>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
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
  );
}
