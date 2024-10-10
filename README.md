# Ancient Games

Welcome to my PixiJS-based game application, a dynamic creation built with JavaScript and PixiJS, using familiar game development patterns. The heart of the project beats to the rhythm of a **State Machine**, which orchestrates all the separate states and brings structure to the flow of the game. Each state has a clear role and purpose, ensuring that everything fits perfectly into place.

To connect components and other game parts, I employed the **MVC pattern**, but given the simplicity and small scope of this project, the model is kept lean, almost invisible, making sure there’s no unnecessary bloat.

## Main Structure: The Lobby

It all begins with the **Lobby** – the main hub, offering users the freedom to explore other interactive states. It’s a friendly space, inviting you to dive into the interactive elements of the game with a simple click.

## The States

I wanted to create something unique with each state, something that adds flavor and fun to the project. Here’s a peek into the interactive experiences:

### Cards

Imagine a stack of 144 cards, each a separate **sprite** (yes, sprites, not just graphics objects – keeping it real!). These cards are neatly stacked like a deck, with each card slightly covering the one below it. Every second, one card slides away from the top of the stack, floating to another stack. It’s a smooth 2-second animation that keeps you glued, and by the end, the deck is completely reversed. Oh, and you can also track the number of cards in each stack along with the FPS – because performance matters!

### Texts

This part is all about fun with text and images. I’ve built a handy tool that can create mixed text-and-image objects effortlessly. Every two seconds, you’ll see a new combo pop up on the screen – it could be an emoji next to some text, a price next to a money icon, or any random combination of text and images. The font size changes too, so it’s always fresh and unpredictable. It’s a little chaotic, but in a fun way!

### Particles

And finally, what’s a game demo without some eye-catching effects? I’ve created a **fire effect** demo that brings some serious visual flair. The challenge was to keep the number of images low – max 10 sprites on the screen at once – but that didn’t stop me from making it look awesome. Feel free to use existing libraries just like you would in a real project, because this demo is meant to inspire creativity while keeping performance in check.

## Installation and Running the Project

To get started with this project, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/zigus-magus/ancient-games.git
    cd ancient-games
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

1. Start the development server using Vite:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173` to see the game in action.

Enjoy exploring and developing with PixiJS!