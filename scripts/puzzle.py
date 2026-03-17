import argparse
from PIL import Image
import os

def generate_puzzle_grid(image_path, output_dir, resolution, grid_size):
    """
    Generates a puzzle grid from an image.

    Parameters:
        image_path (str): Path to the input image.
        output_dir (str): Directory to save the tiles.
        resolution (int): Size of the square image to resize to (pixels).
        grid_size (int): Number of tiles per row/column.
    """
    os.makedirs(output_dir, exist_ok=True)

    img = Image.open(image_path)
    width, height = img.size

    # Center crop to square
    if width != height:
        min_side = min(width, height)
        left = (width - min_side) // 2
        top = (height - min_side) // 2
        right = left + min_side
        bottom = top + min_side
        img = img.crop((left, top, right, bottom))

    # Resize to resolution
    img = img.resize((resolution, resolution), Image.LANCZOS)

    tile_size = resolution // grid_size

    # Create tiles
    for row in range(grid_size):
        for col in range(grid_size):
            left = col * tile_size
            top = row * tile_size
            right = left + tile_size
            bottom = top + tile_size
            tile = img.crop((left, top, right, bottom))

            tile_name = f"tile_r{row}_c{col}.png"
            tile.save(os.path.join(output_dir, tile_name))

    print(f"Generated {grid_size * grid_size} tiles in '{output_dir}'.")

def main():
    parser = argparse.ArgumentParser(description="Generate a puzzle grid from an image.")
    parser.add_argument("image", help="Path to input image file")
    parser.add_argument("grid_size", type=int, help="Number of tiles per row/column")
    parser.add_argument("--output", default="puzzle_tiles", help="Directory to save tiles")
    parser.add_argument("--resolution", type=int, default=600, help="Resolution of resized square image")

    args = parser.parse_args()

    generate_puzzle_grid(
        image_path=args.image,
        output_dir=args.output,
        resolution=args.resolution,
        grid_size=args.grid_size
    )

if __name__ == "__main__":
    main()