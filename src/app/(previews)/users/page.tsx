import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex">
      <nav className="h-svh w-full max-w-72 bg-gray-900 p-6">
        <div className="text-xl font-bold text-white">サービス名とか</div>
        <ul className="mt-10 space-y-1 text-gray-400">
          <li>
            <Link href="/form" className="menu-item">フォーム</Link>
          </li>
          <li>
            <Link href="/users" className="menu-item">ユーザー一覧</Link>
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
          <h1 className="title">ユーザー一覧</h1>
          <p className="mt-2 subtitle">登録されているユーザーの一覧を確認・管理できます</p>

          <div className="card mt-8">
            <h2 className="card-title">検索・フィルター</h2>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="search-name" className="label">名前</label>
                <input
                  type="text"
                  name="search-name"
                  id="search-name"
                  className="input w-full"
                  placeholder="名前で検索"
                />
              </div>
              <div>
                <label htmlFor="search-email" className="label">メールアドレス</label>
                <input
                  type="email"
                  name="search-email"
                  id="search-email"
                  className="input w-full"
                  placeholder="メールアドレスで検索"
                />
              </div>
              <div>
                <label htmlFor="status-filter" className="label">登録状態</label>
                <select id="status-filter" className="input w-full">
                  <option value="">すべて</option>
                  <option value="active">登録</option>
                  <option value="withdrawn">退会</option>
                  <option value="disabled">無効化</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <button type="button" className="btn btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                検索
              </button>
              <button type="button" className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                リセット
              </button>
            </div>
          </div>

          <div className="card mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="card-title">ユーザー一覧</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">123件中 1-20件を表示</span>
                <button type="button" className="btn btn-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  新規ユーザー追加
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>名前</th>
                    <th>メールアドレス</th>
                    <th>登録状態</th>
                    <th>登録日</th>
                    <th>最終ログイン</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                          田
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">田中太郎</div>
                          <div className="text-sm text-gray-500">ID: 12345</div>
                        </div>
                      </div>
                    </td>
                    <td>tanaka@example.com</td>
                    <td>
                      <span className="tag tag-green">登録</span>
                    </td>
                    <td>2024/01/15</td>
                    <td>2024/03/20 14:30</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="action-btn action-btn-view" title="詳細を見る">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-edit" title="編集">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-delete" title="削除">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                          佐
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">佐藤花子</div>
                          <div className="text-sm text-gray-500">ID: 12346</div>
                        </div>
                      </div>
                    </td>
                    <td>sato@example.com</td>
                    <td>
                      <span className="tag tag-red">退会</span>
                    </td>
                    <td>2024/01/20</td>
                    <td>2024/02/28 09:15</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="action-btn action-btn-view" title="詳細を見る">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-edit" title="編集">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-delete" title="削除">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                          鈴
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">鈴木一郎</div>
                          <div className="text-sm text-gray-500">ID: 12347</div>
                        </div>
                      </div>
                    </td>
                    <td>suzuki@example.com</td>
                    <td>
                      <span className="tag tag-gray">無効化</span>
                    </td>
                    <td>2024/02/01</td>
                    <td>2024/03/18 11:45</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="action-btn action-btn-view" title="詳細を見る">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-edit" title="編集">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-delete" title="削除">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                          高
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">高橋美咲</div>
                          <div className="text-sm text-gray-500">ID: 12348</div>
                        </div>
                      </div>
                    </td>
                    <td>takahashi@example.com</td>
                    <td>
                      <span className="tag tag-green">登録</span>
                    </td>
                    <td>2024/02/10</td>
                    <td>2024/03/21 16:20</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="action-btn action-btn-view" title="詳細を見る">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-edit" title="編集">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-delete" title="削除">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                          渡
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">渡辺健太</div>
                          <div className="text-sm text-gray-500">ID: 12349</div>
                        </div>
                      </div>
                    </td>
                    <td>watanabe@example.com</td>
                    <td>
                      <span className="tag tag-green">登録</span>
                    </td>
                    <td>2024/02/15</td>
                    <td>2024/03/19 08:30</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="action-btn action-btn-view" title="詳細を見る">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-edit" title="編集">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button className="action-btn action-btn-delete" title="削除">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">表示件数:</span>
                <select className="input text-sm py-1 px-2">
                  <option value="20">20件</option>
                  <option value="50">50件</option>
                  <option value="100">100件</option>
                </select>
              </div>
              <div className="flex items-center gap-1">
                <button className="pagination-btn" disabled>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button className="pagination-btn pagination-btn-active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="pagination-btn">7</button>
                <button className="pagination-btn">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
