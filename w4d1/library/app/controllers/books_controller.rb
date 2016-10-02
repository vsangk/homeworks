class BooksController < ApplicationController
  def index
    # your code here
    @books = Book.all
  end

  def new
  end

  def create
    book = Book.create(book_params)
    redirect_to books_url
  end

  def destroy
    book = Book.find_by_id(self.params[:id])
    Book.delete(book.id)
    redirect_to books_url
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
