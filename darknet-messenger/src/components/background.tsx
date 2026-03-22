export default function Background() {
    return (
        <div className="fixed inset-0 -z-10">
            <picture>
                {/* Mobile */}
                <source
                    media="(max-width: 768px)"
                    srcSet="/images/bg-mobile.png"
                />

                {/* Desktop */}
                <img
                    src="/images/bg-desktop.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </picture>

            {/* Overlay escuro estilo Apple */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}