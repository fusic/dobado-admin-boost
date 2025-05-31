import Link from "next/link"

export default function Form() {
  return(
    <main className="relative flex">
      <nav className="h-svh w-full max-w-72 bg-gray-900 p-6">
        <div className="text-xl font-bold text-white">サービス名とか</div>
        <ul className="mt-10 space-y-1 text-gray-400">
          <li>
            <Link href="/form" className="menu-item active">フォーム</Link>
          </li>
          <li>
            <Link href="/login" className="menu-item">ログイン</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-1 flex-col">
        <header className="bg-white shadow-sm">
          <nav
            className="mx-auto flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900"
                >Log in <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </nav>
        </header>
        <div className="flex-1 bg-gray-100 p-8">
          <h1 className="title">トップページ</h1>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="card grid grid-cols-2 gap-6">
              <h2 className="card-title col-span-full">テキストフィールド</h2>
              <div className="col-span-full">
                <label htmlFor="email" className="label">メールアドレス</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="input w-full"
                    placeholder="user@example.com"
                  />
                  <div className="caption-group mt-1">
                    <p className="caption">メールアドレスを入力してください</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="label">パスワード</label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    className="input input-error w-full"
                  />
                  <div className="caption-group mt-1">
                    <p className="caption caption-error">
                      パスワードを入力してください
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="label">パスワード確認用</label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    autoComplete="new-password"
                    required
                    className="input w-full"
                  />
                </div>
              </div>
            </div>
            <div className="card space-y-6">
              <h2 className="card-title">テキストエリア</h2>
              <div>
                <label htmlFor="bio" className="label">自己紹介</label>
                <div className="mt-2">
                  <textarea
                    name="bio"
                    id="bio"
                    required
                    className="input w-full"
                    placeholder="自己紹介を入力してください"
                  ></textarea>
                  <div className="caption-group mt-1">
                    <p className="caption">自己紹介を入力してください</p>
                    <p className="caption caption-right">1000文字以内</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card space-y-6">
              <h2 className="card-title">チェックボックス</h2>
              <div>
                <label className="checkbox">
                  <input type="checkbox" defaultChecked />
                  <div>利用規約に同意する</div>
                </label>
              </div>
              <fieldset>
                <legend className="font-bold">都道府県1</legend>
                <div className="flex gap-4 mt-1 checkbox-group checkbox-group-error">
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <div>北海道</div>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div>青森</div>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div>岩手</div>
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend className="font-bold">都道府県2</legend>
                <div className="flex flex-col gap-2 mt-1">
                  <label className="checkbox checkbox-error">
                    <input type="checkbox" />
                    <div>秋田</div>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div>宮城</div>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div>福島</div>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="card space-y-6">
              <h2 className="card-title">ラジオボタン</h2>
              <div>
                <label className="radio">
                  <input type="radio" defaultChecked />
                  <div>利用規約に同意する</div>
                </label>
              </div>
              <fieldset>
                <legend className="font-bold">都道府県1</legend>
                <div className="flex flex-wrap gap-4 mt-1 radio-group radio-group-error">
                  <label className="radio">
                    <input type="radio" name="prefecture1" defaultChecked />
                    <div>北海道</div>
                  </label>
                  <label className="radio">
                    <input type="radio" name="prefecture1" />
                    <div>青森</div>
                  </label>
                  <label className="radio">
                    <input type="radio" name="prefecture1" />
                    <div>岩手</div>
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend className="font-bold">都道府県2</legend>
                <div className="flex flex-col gap-2 mt-1">
                  <label className="radio radio-error">
                    <input type="radio" name="prefecture2" />
                    <div>秋田</div>
                  </label>
                  <label className="radio">
                    <input type="radio" name="prefecture2" />
                    <div>宮城</div>
                  </label>
                  <label className="radio">
                    <input type="radio" name="prefecture2" />
                    <div>福島</div>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
