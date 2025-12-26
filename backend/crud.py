from sqlalchemy.orm import Session
from models import Book
from schemas import BookCreate, BookUpdate


def create_book(db: Session, book: BookCreate):
    new_book = Book(
        name=book.name,
        author=book.author,
        pages=book.pages,
        price=book.price
    )
    db.add(new_book)
    db.commit()
    db.refresh(new_book)
    return new_book


def get_all_books(db: Session):
    # Always return books ordered by ID
    return db.query(Book).order_by(Book.id).all()


def get_book_by_id(db: Session, book_id: int):
    return db.query(Book).filter(Book.id == book_id).first()


def update_book(db: Session, book_id: int, book: BookUpdate):
    existing_book = db.query(Book).filter(Book.id == book_id).first()
    if not existing_book:
        return None

    existing_book.name = book.name
    existing_book.author = book.author
    existing_book.pages = book.pages
    existing_book.price = book.price

    db.commit()
    db.refresh(existing_book)
    return existing_book


def delete_book(db: Session, book_id: int):
    book = db.query(Book).filter(Book.id == book_id).first()
    if not book:
        return None

    db.delete(book)
    db.commit()
    return book
