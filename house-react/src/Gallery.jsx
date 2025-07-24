import './Gallery.css'

const images = [
  'https://via.placeholder.com/600x400?text=House+1',
  'https://via.placeholder.com/600x400?text=House+2',
  'https://via.placeholder.com/600x400?text=House+3',
  'https://via.placeholder.com/600x400?text=House+4',
  'https://via.placeholder.com/600x400?text=House+5'
]

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`House ${idx + 1}`} />
      ))}
    </div>
  )
}
