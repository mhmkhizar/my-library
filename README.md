# My Library

A simple and elegant library management application that allows users to track their personal book collection. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates fundamental web development concepts including DOM manipulation, object-oriented programming, and responsive design.

## Demo

You can view a live demo of the application [here](https://mhmkhizar.github.io/my-library/).

## Features

- **Add Books**: Easily add new books to your library with title, author, page count, and read status
- **Track Reading Progress**: Mark books as read or unread with a simple click
- **Delete Books**: Remove books from your collection when no longer needed
- **Responsive Design**: Clean, modern interface that works across different screen sizes
- **Modal Interface**: User-friendly modal dialog for adding new books
- **Data Persistence**: Books are stored in memory during the session
- **Interactive Table**: Hover effects and smooth transitions for better user experience

## Technologies Used

- **HTML5**: Semantic structure and accessibility features
- **CSS3**: Modern styling with CSS custom properties, flexbox, and transitions
- **JavaScript (ES6+)**: DOM manipulation, object constructors, and event handling

## File Structure

- **`index.html`**: Main HTML structure
- **`styles.css`**: CSS styles and layout
- **`main.js`**: JavaScript functionality
- **`README.md`**: Project documentation

## Usage

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/mhmkhizar/my-library.git

   ```

2. Navigate to the project directory:
   ```
   cd my-library
   ```
3. Open index.html in your web browser to start using the application.
4. Click "Add Book" or the plus icon to add your first book to the library.

## How It Works

### Book Object

The application uses a constructor function to create Book objects:

```
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}
```

### Key Functions

- **Add Books**: Modal form collects book information and adds it to the library array
- **Toggle Read Status**: Click the status icon to mark books as read/unread
- **Delete Books**: Click the delete icon to remove books from the collection
- **Dynamic Display**: Table shows/hides based on whether books exist in the library

## Design Features

- **Modern Color Scheme**: Professional blue and gray color palette
- **Smooth Animations**: Hover effects and transitions for interactive elements
- **Accessible Design**: Proper contrast ratios and semantic HTML structure
- **Clean Typography**: System font stack for optimal readability
- **Visual Feedback**: Clear icons for different actions (add, read status, delete)

## Browser Compatibility

- This application works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Custom Properties (CSS Variables)
- HTML5 Dialog element
- CSS Flexbox

## Future Enhancements

- Local storage integration for data persistence
- Search and filter functionality
- Book rating system
- Import/export library data
- Reading statistics and progress tracking

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

Created by [Muhammad Khizar](https://github.com/mhmkhizar) as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Icons provided by [Material Design Icons](https://pictogrammers.com/library/mdi/)
- Inspired by classic library management systems
- Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum
