import { Navigation } from "../components/Navigation";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";

const borrowedBooks = [
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    dueDate: "2026-04-15",
    borrowedDate: "2026-03-18",
    cover: "https://images.unsplash.com/photo-1773606382007-afddea672b0e?w=200",
  },
  {
    id: 3,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, et al.",
    dueDate: "2026-04-10",
    borrowedDate: "2026-03-13",
    cover: "https://images.unsplash.com/photo-1773614207981-19bce2baa7e9?w=200",
  },
];

const reservedBooks = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen, et al.",
    reservedDate: "2026-03-28",
    expectedAvailability: "2026-04-05",
    cover: "https://images.unsplash.com/photo-1683279705183-6543523ea72e?w=200",
  },
];

const readingHistory = [
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    returnedDate: "2026-03-10",
    cover: "https://images.unsplash.com/photo-1765969934422-077ccae29246?w=200",
  },
  {
    id: 5,
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson, Gerald Jay Sussman",
    returnedDate: "2026-02-28",
    cover: "https://images.unsplash.com/photo-1773266109454-765e229ccc4a?w=200",
  },
];

const notifications = [
  {
    id: 1,
    type: "reminder",
    message: "Clean Code is due in 13 days",
    date: "2026-04-02",
  },
  {
    id: 2,
    type: "alert",
    message: "Design Patterns is due in 8 days",
    date: "2026-04-02",
  },
  {
    id: 3,
    type: "info",
    message: "Introduction to Algorithms is now available for pickup",
    date: "2026-04-01",
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-16">
          <h1
            className="mb-4"
            style={{
              fontSize: '3.5rem',
              color: 'var(--midnight-blue)',
              fontWeight: 500,
            }}
          >
            Dashboard
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--soft-grey)',
              fontWeight: 300,
            }}
          >
            Manage your borrowed books and reading history
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Currently Borrowed
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              {borrowedBooks.length}
            </p>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Reserved
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              {reservedBooks.length}
            </p>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ backgroundColor: 'var(--soft-beige)', border: '1px solid rgba(26, 35, 50, 0.06)' }}
          >
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--soft-grey)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              Books Read
            </p>
            <p
              style={{
                fontSize: '3rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
                fontFamily: 'Playfair Display, Georgia, serif',
              }}
            >
              {readingHistory.length}
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <h2
              className="mb-8"
              style={{
                fontSize: '2rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Borrowed Books
            </h2>

            <div className="space-y-1">
              {borrowedBooks.map((book) => {
                const daysUntilDue = Math.ceil(
                  (new Date(book.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                const isOverdue = daysUntilDue < 0;
                const isDueSoon = daysUntilDue <= 7 && daysUntilDue >= 0;

                return (
                  <div
                    key={book.id}
                    className="flex items-center gap-8 py-6 px-6"
                    style={{ borderBottom: '1px solid rgba(26, 35, 50, 0.06)' }}
                  >
                    <div
                      className="bg-warm-beige overflow-hidden flex-shrink-0"
                      style={{
                        width: '60px',
                        height: '85px',
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
                      <Link
                        to={`/book/${book.id}`}
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--midnight-blue)',
                          lineHeight: '1.4',
                          display: 'block',
                        }}
                      >
                        {book.title}
                      </Link>
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
                          color: 'var(--soft-grey)',
                          fontWeight: 300,
                        }}
                      >
                        Borrowed: {new Date(book.borrowedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>

                    <div className="text-right space-y-2">
                      <p
                        style={{
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          color: 'var(--soft-grey)',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                        }}
                      >
                        Due Date
                      </p>
                      <p
                        style={{
                          fontSize: '1rem',
                          color: isOverdue ? 'var(--destructive)' : isDueSoon ? 'var(--muted-gold)' : 'var(--midnight-blue)',
                          fontWeight: 400,
                        }}
                      >
                        {new Date(book.dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                      </p>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: isOverdue ? 'var(--destructive)' : isDueSoon ? 'var(--muted-gold)' : 'var(--soft-grey)',
                          fontWeight: 300,
                        }}
                      >
                        {isOverdue ? `${Math.abs(daysUntilDue)} days overdue` : `${daysUntilDue} days remaining`}
                      </p>
                    </div>

                    <button
                      className="px-6 py-3 rounded-sm transition-all duration-300 hover:bg-midnight-blue hover:text-ivory"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--midnight-blue)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontWeight: 400,
                        border: '1px solid rgba(26, 35, 50, 0.2)',
                      }}
                    >
                      Renew
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

          <div>
            <h2
              className="mb-8"
              style={{
                fontSize: '2rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Reserved Books
            </h2>

            <div className="space-y-1">
              {reservedBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center gap-8 py-6 px-6"
                  style={{ borderBottom: '1px solid rgba(26, 35, 50, 0.06)' }}
                >
                  <div
                    className="bg-warm-beige overflow-hidden flex-shrink-0"
                    style={{
                      width: '60px',
                      height: '85px',
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
                    <Link
                      to={`/book/${book.id}`}
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--midnight-blue)',
                        lineHeight: '1.4',
                        display: 'block',
                      }}
                    >
                      {book.title}
                    </Link>
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
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                      }}
                    >
                      Reserved: {new Date(book.reservedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>

                  <div className="text-right space-y-2">
                    <p
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                        color: 'var(--soft-grey)',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                      }}
                    >
                      Expected Availability
                    </p>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'var(--muted-gold)',
                        fontWeight: 400,
                      }}
                    >
                      {new Date(book.expectedAvailability).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </p>
                  </div>

                  <button
                    className="px-6 py-3 rounded-sm transition-all duration-300 hover:opacity-70"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'var(--destructive)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      border: '1px solid var(--destructive)',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

          <div>
            <h2
              className="mb-8"
              style={{
                fontSize: '2rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Notifications
            </h2>

            <div className="space-y-1">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-6 py-5 px-6"
                  style={{
                    borderBottom: '1px solid rgba(26, 35, 50, 0.06)',
                    backgroundColor: notification.type === 'alert' ? 'rgba(139, 64, 68, 0.03)' : 'transparent',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{
                      backgroundColor:
                        notification.type === 'alert'
                          ? 'var(--destructive)'
                          : notification.type === 'info'
                          ? 'var(--muted-gold)'
                          : 'var(--soft-grey)',
                    }}
                  />
                  <div className="flex-1 space-y-1">
                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'var(--midnight-blue)',
                        fontWeight: 300,
                      }}
                    >
                      {notification.message}
                    </p>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                      }}
                    >
                      {new Date(notification.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(26, 35, 50, 0.08)' }} />

          <div>
            <h2
              className="mb-8"
              style={{
                fontSize: '2rem',
                color: 'var(--midnight-blue)',
                fontWeight: 500,
              }}
            >
              Reading History
            </h2>

            <div className="space-y-1">
              {readingHistory.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center gap-8 py-6 px-6"
                  style={{ borderBottom: '1px solid rgba(26, 35, 50, 0.06)' }}
                >
                  <div
                    className="bg-warm-beige overflow-hidden flex-shrink-0"
                    style={{
                      width: '60px',
                      height: '85px',
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
                    <Link
                      to={`/book/${book.id}`}
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--midnight-blue)',
                        lineHeight: '1.4',
                        display: 'block',
                      }}
                    >
                      {book.title}
                    </Link>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                      }}
                    >
                      {book.author}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--soft-grey)',
                        fontWeight: 300,
                      }}
                    >
                      Returned: {new Date(book.returnedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
