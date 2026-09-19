import { Header } from "./header-3";

export default function DemoOne() {
    return (
        <div className="flex w-full flex-col">
        <Header />
          <main className="grow bg-gray-50">
            <section className="py-16">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Prajwal App Screenshots</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611162617474-2b2f54e9424e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1NDZ8MHwxfHNlYXJjaHwxfHxhcHAlMkNzY3JlZW5zaHQlMkNtb2JpbGN8ZW58MHx8fHwxNjY5MTQ4MzYw&ixlib=rb-1.2.1&q=80&w=400"
                      alt="Prajwal Home Screen"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">Home Dashboard</h3>
                      <p className="text-sm text-gray-600">View your transaction history and wallet balance</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611162619450-7ef570341f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1NDZ8MHwxfHNlYXJjaHwxfHxzY2FubmVyJTIwc3RhdGUlMkNhbWVyYXJlfGVufDB8fHx8MTY2NTE0ODM2MQ&ixlib=rb-1.2.1&q=80&w=400"
                      alt="Scanner Screen"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">QR Code Scanner</h3>
                      <p className="text-sm text-gray-600">Scan UPI QR codes for instant payments</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611162620576-58f296844e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1NDZ8MHwxfHNlYXJjaHwzfHxwYXltZW50JTIwcHJvY2Vzc2luZyUyMHNjcmVlbnR8ZW58MHx8fHwxNjY1NDg4MzYy&ixlib=rb-1.2.1&q=80&w=400"
                      alt="Payment Processing"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">Payment Processing</h3>
                      <p className="text-sm text-gray-600">Secure transaction processing with real-time updates</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611162622536-83aaa906dff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzY1NDZ8MHwxfHNlYXJjaHwzfHxwYXJvdGggdG8lMjB0b3VyJTIwcHJvZmlsZXxlbnwwfHx8fDE2NjU0ODgzNjM&ixlib=rb-1.2.1&q=80&w=400"
                      alt="Profile Screen"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">User Profile</h3>
                      <p className="text-sm text-gray-600">Manage your account settings and preferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How Prajwal Works</h2>
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                      <span className="text-white text-xl">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Scan QR Code</h3>
                      <p className="text-gray-600">Use your phone's camera to scan any UPI QR code at participating merchants</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                      <span className="text-white text-xl">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Confirm Amount</h3>
                      <p className="text-gray-600">Enter the payment amount and verify the merchant details before proceeding</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                      <span className="text-white text-xl">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">Complete Payment</h3>
                      <p className="text-gray-600">Pay securely using your international card - funds converted to INR and sent to the merchant's UPI ID</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
       </div>
  );
}
