/**
 * Shimmer Loading Skeleton for the Customer Workspace
 */
const CustomerSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-[#FAF7F1] font-['Plus_Jakarta_Sans',sans-serif] animate-pulse">
      {/* 1. Header Skeleton */}
      <header className="sticky top-0 z-50 bg-[#FAF7F1]/80 backdrop-blur-md border-b border-[#0F2A22]/10 px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#0F2A22]/10" />
          <div className="h-6 w-28 bg-[#0F2A22]/10 rounded-md" />
        </div>

        {/* User Info Placeholder */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end gap-1.5 hidden sm:flex">
            <div className="h-2.5 w-16 bg-[#0F2A22]/10 rounded" />
            <div className="h-3 w-20 bg-[#0F2A22]/10 rounded" />
          </div>
          <div className="h-9 w-9 rounded-full bg-[#0F2A22]/10" />
        </div>
      </header>

      {/* 2. Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        {/* Welcome Banner Skeleton */}
        <div className="mb-14 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="h-6 w-32 bg-[#B08D57]/15 rounded-full mb-4" />
          <div className="h-10 sm:h-12 w-3/4 bg-[#0F2A22]/10 rounded-lg mb-3" />
          <div className="h-4 w-5/6 bg-[#0F2A22]/10 rounded mb-2" />
          <div className="h-4 w-4/6 bg-[#0F2A22]/10 rounded" />
        </div>

        {/* Action Cards Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1 Skeleton */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#0F2A22]/10 shadow-sm flex flex-col justify-between">
            {/* Image Placeholder */}
            <div className="h-64 sm:h-72 bg-[#0F2A22]/10 w-full relative">
              <div className="absolute top-4 left-4 h-5 w-28 bg-white/50 rounded-full" />
            </div>

            {/* Body Placeholder */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="h-7 w-2/3 bg-[#0F2A22]/10 rounded mb-3" />
                <div className="h-3.5 w-full bg-[#0F2A22]/10 rounded mb-2" />
                <div className="h-3.5 w-4/5 bg-[#0F2A22]/10 rounded" />
              </div>
              <div className="h-12 w-full bg-[#0F2A22]/10 rounded-xl mt-4" />
            </div>
          </div>

          {/* Card 2 Skeleton */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#0F2A22]/10 shadow-sm flex flex-col justify-between">
            {/* Image Placeholder */}
            <div className="h-64 sm:h-72 bg-[#0F2A22]/10 w-full relative">
              <div className="absolute top-4 left-4 h-5 w-28 bg-white/50 rounded-full" />
            </div>

            {/* Body Placeholder */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="h-7 w-2/3 bg-[#0F2A22]/10 rounded mb-3" />
                <div className="h-3.5 w-full bg-[#0F2A22]/10 rounded mb-2" />
                <div className="h-3.5 w-4/5 bg-[#0F2A22]/10 rounded" />
              </div>
              <div className="h-12 w-full bg-[#0F2A22]/10 rounded-xl mt-4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerSkeleton;
