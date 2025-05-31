export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h1 className="heading-3xl mt-10 text-center">ログイン</h1>
        </div>

        <div className="card mt-10 bg-white sm:mx-auto sm:w-full sm:max-w-lg">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="label">
                メールアドレス
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="input w-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="label">
                  パスワード
                </label>
                <div>
                  <a
                    href="#"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    パスワードを忘れた場合
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="input w-full"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-full">
                ログイン
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
