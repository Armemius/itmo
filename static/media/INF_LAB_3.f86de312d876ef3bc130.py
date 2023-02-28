import re

def findEmojis():
    pt = re.compile(r"\[</")
    tests = {
        "[</[</[</[</[</[</[</[</[</[</[</[</[</[</[</", # 15
        "[<<</ [</ sus", # 1
        "\\>][</", # 1
        "Amogus sus", # 0
        "B[</r[</u[</h", # 3
    }
    for test in tests:
        print (test + ":")
        print(len(re.findall(pt, test)))

def wordFinder():
    pt = re.compile(r"(?=(\b[а-я]*[уеыаоэяию]{2}[а-я]*)\W+(([уеыаоэяию]*[йцкнгшщзхфвпрлджчсмтб][уеыаоэяию]*){1,3}|[уеыаоэяию]+)\b)", flags=re.IGNORECASE)
    tests = {
        "Кривошеее существо гуляет по парку", # гуляет
        "Ееее рок круто, а рееп нет", # Ееее рееп
        "ОоО аАа ммм", # ОоО аАа
        "Остался    лишь       змеиный       след", # змеиный
        "Для вас слово ром и слово смерть значат одно и тоже", # -
    }
    for test in tests:
        print(test + ":")
        for it in re.findall(pt, test):
            print(it[0])
        print("")

def wordAnalyzer(chars, gap):
    print("Selected sequence")
    line = "\\b" + chars[0] + f"[^\\s{chars[0]}{chars[1]}{chars[2]}]" + "{" + f"{gap}" + "}" \
        + chars[1] + f"[^\\s{chars[0]}{chars[1]}{chars[2]}]" + "{" + f"{gap}" + "}" + chars[2] + "\\b"
    print("Generated regex", line)
    pt = re.compile(line, flags=re.IGNORECASE)
    text = "Амогус сус корма мышца змммдммма"
    for it in re.findall(pt, text):
            print(it)

vr = 613379
print("1st task variant:", vr % 6, vr % 4, vr % 7)
findEmojis()

print("2nd task variant:", vr % 6) 
wordFinder()

print("3rd task variant:", vr % 5)
wordAnalyzer("КРА", 1)

print(re.sub(r"[\"',;.]+", "", '""A, very very; irregular_sentence""'))