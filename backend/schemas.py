from pydantic import BaseModel

# Schema for creating a book
class BookCreate(BaseModel):
    name: str
    author: str
    pages: int
    price: float


# Schema for updating a book
class BookUpdate(BaseModel):
    name: str
    author: str
    pages: int
    price: float


# Schema for returning a book (response)
class BookResponse(BaseModel):
    id: int
    name: str
    author: str
    pages: int
    price: float

    class Config:
        from_attributes = True
