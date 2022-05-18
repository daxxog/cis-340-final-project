using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace ShopEasyAPI
{
    public class Crypto
    {
        // do not modify this unless you know what you are doing !
        public static readonly int              _HASH_FORMAT_REVISION        = 1;
        public static readonly KeyDerivationPrf _PBKDF2_HASH_FN              = KeyDerivationPrf.HMACSHA512;
        public static readonly int              _PBKDF2_HASH_FN_SIZE         = 512;
        public static readonly int              _PBKDF2_ROUNDS               = 2000;
        public static readonly int              _PBKDF2_SALT_SIZE_BITS       = 128;


        private static byte[] generateSalt()
        {
            // generate a salt using a cryptographically strong random sequence of nonzero values
            byte[] salt = new byte[_PBKDF2_SALT_SIZE_BITS / 8];
            using (var rngCsp = new RNGCryptoServiceProvider())
            {
                rngCsp.GetNonZeroBytes(salt);
            }

            return salt;
        }

        public static string HashPassword(string password)
        {
            byte[] salt = generateSalt();

            // derive a subkey
            byte[] hashed = KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: _PBKDF2_HASH_FN,
                iterationCount: _PBKDF2_ROUNDS,
                numBytesRequested: _PBKDF2_HASH_FN_SIZE / 8);

            return $"{_HASH_FORMAT_REVISION}.{_PBKDF2_HASH_FN}." +
                   $"{_PBKDF2_HASH_FN_SIZE}.{_PBKDF2_ROUNDS}." +
                   $"{Convert.ToBase64String(salt)}.{Convert.ToBase64String(hashed)}";
        }

        // https://stackoverflow.com/a/18472981
        private static bool bytesEquals(byte[] a1, byte[] b1)
        {
            int i;
            if (a1.Length == b1.Length)
            {
                i = 0;
                while (i < a1.Length && (a1[i] == b1[i]))
                {
                    i++;
                }

                if (i == a1.Length)
                {
                    return true;
                }
            }

            return false;
        }

        private static bool validatePassword_v1(string password, string[] parts)
        {
            // parse out the parts of the hashed password
            KeyDerivationPrf PBKDF2_HASH_FN = (KeyDerivationPrf)Enum.Parse(typeof(KeyDerivationPrf), parts[1]);
            int PBKDF2_HASH_FN_SIZE = Int32.Parse(parts[2]);
            int PBKDF2_ROUNDS = Int32.Parse(parts[3]);
            byte[] salt = Convert.FromBase64String(parts[4]);
            byte[] expectedHashed = Convert.FromBase64String(parts[5]);

            // derive a subkey
            byte[] actualHashed = KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: PBKDF2_HASH_FN,
                iterationCount: PBKDF2_ROUNDS,
                numBytesRequested: PBKDF2_HASH_FN_SIZE / 8);

            return bytesEquals(expectedHashed, actualHashed);
        }

        public static bool ValidatePassword(string password, string hashed)
        {
            string[] parts = hashed.Split('.');
            if (parts[0] == "1")
            {
                return validatePassword_v1(password, parts);
            }
            else
            {
                return false;
            }
        }

        public static void CryptoExample(string password = "solarwinds123")
        {
            string hashed = HashPassword(password);
            Console.WriteLine($"Hashed: {hashed}");
            Console.WriteLine(ValidatePassword(password, hashed));
            Console.WriteLine(ValidatePassword(password + "1", hashed));
        }
    }
}
