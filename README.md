# Word Association Game

A simple Word Association Game built with React and CSS.

![Screenshot of the Game](./public/screenshot.png "Word Association Game")

## How to play

1. Choose one of the words that appear at the top of the page.
2. Drag it to match the correct image.
3. When you release the word, you will hear how it is pronounced.
4. If the association is correct, a green check mark will appear below the image.
5. If the association is incorrect, you can try again.
6. The most important step: have fun!

## For Developers

### Built with

This project uses React and Pure CSS. The interaction is built using the [HTML Drag&Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop) and [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).

### Getting Started

1. Clone the repo.
2. Install the dependencies.

```
npm install
```

3. Run the project.

```
npm start
```

### Current Implementation

The current implementation covers a basic use case. However, the isual components are built as dummies separated from the business logic to allow the scalability, reusability and also reduce the maintainance time. To extend the use, each component can be used separately. In addition, reproducible figures and images can be easily replaced or added if necessary by placing more items in the `playableItems` object, as follows:

```
const playableItems = [
  ...,
  {
    id: "5",
    name: "tomato",
    image: tomato, // add another image to the project.
    buttonBackgroundColor: "#02bfe7", // [choose a color](http://web-accessibility.carnegiemuseums.org/design/color/) with sufficient contrast with the text color wich is #212121.
  },
];
```

I decided to use React, HTML APIs and pure CSS to keep the simplicity of all the elements, especially since I've used the HTML Drag&Drop API before. The state of the application -which in this case is minimal- is handled by the view itself.

As for typing, the current implementation uses React Prop-types, which is by far the best approach due to its limitations. Basically, the biggest problem with prop-types is that type checking is done after the application is built and warnings/errors are displayed in the DevTools but it can provide some control over the props. In a production application, I would definitely prefer Typescript.
### Accesibility

The current application barely covers all accessibility needs. This solution includes:

- Tags are identified and roles are included using semantic HTML.
- The colors chosen are contrasting to be legible for a person with low vision.

Possible improvements:

- Handling interaction using the keyboard. This [article](https://medium.com/salesforce-ux/4-major-patterns-for-accessible-drag-and-drop-1d43f64ebf09) provides an interesting walkthrough on different approaches to implement accessible drag-and-drop functionality.
