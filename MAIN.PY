from flask import Flask, render_template, request, redirect, send_file
import yt_dlp
import os
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title="RAJ PANCHAL VIDEO DOWNLOADER")

# ========== YOUTUBE DOWNLOADER ==========
@app.route('/download_youtube', methods=['POST'])
def download_youtube():
    url = request.form['url']
    ydl_opts = {
        'outtmpl': 'downloads/youtube/%(title)s.%(ext)s',
        'format': 'bestvideo+bestaudio/best',
        'merge_output_format': 'mp4',
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(url, download=True)
        filename = ydl.prepare_filename(info_dict)
    return send_file(filename, as_attachment=True)

# ========== INSTAGRAM REEL/POST DOWNLOADER ==========
@app.route('/download_instagram', methods=['POST'])
def download_instagram():
    url = request.form['url']
    try:
        ydl_opts = {
            'outtmpl': 'downloads/instagram/%(title)s.%(ext)s',
            'format': 'best',
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return "✅ Instagram download successful!"
    except Exception as e:
        return f"❌ Instagram download failed: {str(e)}"

# ========== TERABOX PUBLIC VIDEO DOWNLOADER ==========
def get_terabox_direct_link(public_url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    session = requests.Session()
    response = session.get(public_url, headers=headers)

    if "window.location.href" in response.text:
        redirect_link = response.text.split("window.location.href='")[1].split("'")[0]
        return redirect_link
    else:
        return None

@app.route('/download_terabox', methods=['POST'])
def download_terabox():
    url = request.form['url']
    direct_link = get_terabox_direct_link(url)
    if direct_link:
        response = requests.get(direct_link)
        filename = "downloads/terabox_video.mp4"
        with open(filename, "wb") as f:
            f.write(response.content)
        return send_file(filename, as_attachment=True)
    else:
        return "❌ Unable to fetch Terabox video link."

# ========== RUN FLASK APP ==========
if __name__ == '__main__':
    print("=" * 60)
    print("RAJ PANCHAL VIDEO DOWNLOADER")
    print("=" * 60)
    print("Starting server...")
    print("Supported platforms: YouTube, Instagram, TeraBox, and more!")
    print("Features: Reels, Posts, Videos, Bulk downloads")
    print("Server running on: http://localhost:5000")
    print("=" * 60)
    app.run(debug=True, host='0.0.0.0', port=5000)
